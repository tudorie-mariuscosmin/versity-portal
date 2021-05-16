import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styled from 'styled-components'

const CenteredDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    flex-direction:column;
`

export default function LoadingContainer({ loading, children, description }) {
    if (loading)
        return (
            <CenteredDiv>
                <Spinner animation="border" >
                    <span className="sr-only">Loading...</span>
                </Spinner>
                <div className="h5">{description}</div>
            </CenteredDiv>
        )
    else
        return (
            <>
                {children}
            </>
        )

}
