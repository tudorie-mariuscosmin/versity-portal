import React from 'react'
import styled from 'styled-components'
const NameSpan = styled.span`
    font-size:0.9em;
    font-weight:bold;
`
const TextSpan = styled.span`
    font-size:0.9em;
    margin-left:3px;
`
export default function Comment({ comment }) {
    return (
        <div>
            <NameSpan>{comment.name}</NameSpan>
            <TextSpan>{comment.text}</TextSpan>
        </div>
    )
}
