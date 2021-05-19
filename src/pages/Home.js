import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../components/Navigation'
import PostsList from '../components/PostsList'
import { getUniPosts } from '../store/post/post.selectors'
export default function Home() {
    return (
        <div style={{ marginBottom: '80px' }}>
            <Navigation />
            <Container >
                <PostsList showUni showUser selector={getUniPosts} />

            </Container>
        </div>
    )
}
