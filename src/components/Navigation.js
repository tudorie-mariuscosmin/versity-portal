import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image } from 'react-bootstrap'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { getUserAvatar } from '../store/user/user.selectors'

const UnorderedList = styled.ul`
list-style: none;
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin:0;
padding:0;
`
const Nav = styled.div`
position: fixed;
bottom:0;
width:100vw;
border-top: 1px solid #dadde1;
background-color: white;
`
const ListItem = styled.li`
padding: 10px;
color: black;
display: flex;
flex-direction: column-reverse;
align-items: center;
cursor: pointer;
color: ${props => props.path === props.pathname ? '#2291ff' : '#000000'};
`


const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
font-size: 1.2em;
`
const Avatar = styled(Image)`
    width:22px;
    height:22px;
`


export default function Navigation() {

    const avatarUrl = useSelector(getUserAvatar)
    const history = useHistory();

    const changePage = (path) => {
        history.push(path)
    }







    return (
        <Nav>
            <UnorderedList>
                <ListItem path="/" pathname={history.location.pathname} onClick={() => changePage("/")}>
                    Home
                    <FontAwesomeIconStyled icon={["fas", "home"]} />
                </ListItem>
                <ListItem path="/explore" pathname={history.location.pathname} onClick={() => changePage("/explore")}>
                    Explore
                    <FontAwesomeIconStyled icon={["fas", "search"]} />
                </ListItem>
                <ListItem path="/add" pathname={history.location.pathname} onClick={() => changePage("/add")}>
                    Add Post
                    <FontAwesomeIconStyled icon={["fas", "plus-square"]} />
                </ListItem>
                <ListItem path="/profile" pathname={history.location.pathname} onClick={() => changePage("/profile")}>
                    Profile
                    <Avatar src={avatarUrl} roundedCircle />
                </ListItem>
                <ListItem path="/settings" pathname={history.location.pathname} onClick={() => changePage("/settings")}>
                    Settings
                    <FontAwesomeIconStyled icon={["fas", "cog"]} />
                </ListItem>
            </UnorderedList>
        </Nav>
    )
}
