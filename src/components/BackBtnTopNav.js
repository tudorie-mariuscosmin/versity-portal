import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
    width:100vw;
    position:fixed;
    top:0;
    right:0;
    left:0;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-bottom:1px solid #dadde1;
    z-index:3;
    font-size:1.2em;
    background-color:white;
`
const Icon = styled(FontAwesomeIcon)`
    font-size:1.5em;
    position:absolute;
    left:5px;

`

export default function BackBtnTopNav({ description, onBack }) {
    return (
        <Nav>
            <Icon icon={['fas', 'arrow-left']} onClick={onBack} />
            {description}
        </Nav>
    )
}
