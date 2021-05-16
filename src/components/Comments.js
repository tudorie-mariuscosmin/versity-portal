import React, { useState } from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div`
    margin-left:10px;
    margin-top:5px;
`
const Button = styled.div`
    cursor: pointer;
    font-size:${props => props.sizeLg ? '0.8em' : '0.6em'};


`
export default function Comments({ comments }) {
    const [show, setShow] = useState(false)
    if (comments.length > 0) {
        if (show)
            return (
                <Container>
                    {
                        comments.map((comment, index) => <Comment key={index} comment={comment} />)
                    }
                    <Button onClick={() => setShow(false)}>Hide Comments</Button>
                </Container>
            )
        else
            return (
                <Button sizeLg onClick={() => setShow(true)}>Show Comments</Button>
            )

    } else {
        return null;
    }


}
