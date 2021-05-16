import React from 'react'
import { useSelector } from 'react-redux'
import Navigation from '../components/Navigation'
import { getUser } from '../store/user/user.selectors'
import Image from '../components/Image'
import { Col, Container, Row } from 'react-bootstrap'
import PostsList from '../components/PostsList'



export default function Profile() {
    const user = useSelector(getUser)
    return (
        <div style={{ marginBottom: '75px' }}>
            <Navigation />
            <Container className="mt-3">
                <Row >
                    <Col>
                        <Image source={user.avatar} />
                    </Col>
                    <Col xs={8}>
                        <div className="h3">{user.name}</div>
                        <div className="">{user.email}</div>
                        <div>{user.uni}</div>
                    </Col>
                </Row>
                <hr />
                <PostsList showUni />


            </Container>

        </div>
    )
}
