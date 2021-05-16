import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Comments from './Comments'
import Image from './Image'

const DateContainer = styled.div`
    float:right;
    font-size:0.9em;
    font-style:italic;
    color:grey;
`
const UniContainer = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    font-size:0.9em;
    float:right;
`
export default function Post({ post, showUni }) {
    return (
        <div className="my-1">
            <Row>

                <Col>
                    <DateContainer>{post.date.toDateString()}</DateContainer>
                </Col>
            </Row>
            <Image className="mx-auto" source={post.photoUrl} fullWidth />
            <Row className="mt-1">
                <Col >
                    <div className="d-flex align-items-center h6">
                        <FontAwesomeIcon icon={['fas', 'heart']} style={{ color: 'tomato', fontSize: '1.5em' }} className="me-2" />
                        {post.likes} likes
                    </div>
                </Col>
                <Col>
                    <UniContainer show={showUni}>{post.university}</UniContainer>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>{post.description}</div>
                </Col>
            </Row>
            <Row>
                <div className="d-flex">
                    <input className="form-control form-control-sm" type="text" placeholder="Add Comment" />
                    <button className="btn btn-primary">
                        <FontAwesomeIcon icon={['fas', 'plus']} />
                    </button>

                </div>
                <Comments comments={post.comments} />
            </Row>
        </div>

    )
}
