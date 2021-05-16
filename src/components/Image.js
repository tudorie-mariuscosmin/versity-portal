import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const StyledImg = styled.img`
    width:${props => props.fullWidth ? '95vw' : ''};
    max-width:400px;
    border-radius:5px;
`
const StyledContainer = styled.div`
    background-color:grey;
    width:50vw;
    height:50vw;
    max-width:200px;
    max-height:200px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-radius:5px;
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size:3em;
`

export default function Image({ source, fullWidth }) {
    return (
        <div className="d-flex justify-content-center">
            {
                source !== null ?
                    (
                        < StyledImg src={source} fullWidth={fullWidth} />
                    )
                    :
                    (
                        <StyledContainer>
                            <StyledFontAwesomeIcon icon={["fas", "home"]} />
                        No image selected
                        </StyledContainer>
                    )
            }
        </div>
    )
}
