import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchUnis } from '../store/universities/universities'
import { getAllUnis } from '../store/universities/universities.selector'

const UniContainer = styled.div`
    height:120px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:12px;
    margin-bottom:12px;
    border-radius:5px;
    background: rgb(13,110,253);
    background: linear-gradient(132deg, rgba(13,110,253,1) 0%, rgba(110,71,249,1) 100%);
    color:white;
    font-size:1.5em;    
    text-align:center;
    box-shadow: 2px 2px 2px  #ccc;
    padding:20px;
    cursor: pointer;
`

export default function UniversitiesGrid({ selectUni }) {
    const universities = useSelector(getAllUnis)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUnis())
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    {
                        universities.map((uni, index) =>
                            <Col xs={6} key={index}>
                                <UniContainer onClick={() => selectUni(uni)}>
                                    {uni}
                                </UniContainer>
                            </Col>)
                    }
                </Row>
            </Container>

        </div>
    )
}
