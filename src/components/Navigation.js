import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image } from 'react-bootstrap'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'





export default function Navigation() {

    const avatarUrl = useSelector(state => state.user.avatar)
    const history = useHistory();

    const changePage = (path) => {
        history.push(path)
    }

    const Nav = styled.div`
        position: fixed;
        bottom:0;
        width:100vw;
        border-top: 1px solid #dadde1;
        background-color: white;
        `

    const UnorderedList = styled.ul`
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin:0;
        padding:0;
        `
    const ListItem = styled.li`
        padding: 10px;
        color: black;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        cursor: pointer;
        color: ${props => props.path === history.location.pathname ? '#2291ff' : '#000000'};
        `

    const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
        font-size: 1.2em;
        `
    const Avatar = styled(Image)`
        width:22px;
        `


    return (
        <Nav>
            <UnorderedList>
                <ListItem path="/" onClick={() => changePage("/")}>
                    Home
                    <FontAwesomeIconStyled icon={["fas", "home"]} />
                </ListItem>
                <ListItem path="/explore" onClick={() => changePage("/explore")}>
                    Explore
                    <FontAwesomeIconStyled icon={["fas", "search"]} />
                </ListItem>
                <ListItem path="/add" onClick={() => changePage("/add")}>
                    Add Post
                    <FontAwesomeIconStyled icon={["fas", "plus-square"]} />
                </ListItem>
                <ListItem path="/profile" onClick={() => changePage("/profile")}>
                    Profile
                    <Avatar src={avatarUrl} roundedCircle />
                </ListItem>
                <ListItem path="/settings" onClick={() => changePage("/settings")}>
                    Settings
                    <FontAwesomeIconStyled icon={["fas", "cog"]} />
                </ListItem>
            </UnorderedList>
        </Nav>
    )
}
