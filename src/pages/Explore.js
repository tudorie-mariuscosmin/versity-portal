import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import BackBtnTopNav from '../components/BackBtnTopNav'

import Navigation from '../components/Navigation'
import PostsList from '../components/PostsList'
import UniversitiesGrid from '../components/UniversitiesGrid'
import { getSelectedUniPosts } from '../store/post/post.selectors'




export default function Explore() {
    const [uniSelected, setUniSelected] = useState('')

    return (
        <div>
            <Navigation />
            {
                uniSelected ?
                    <div style={{ marginBottom: '80px', marginTop: '45px' }}>
                        <BackBtnTopNav description={uniSelected} onBack={() => setUniSelected("")} />
                        <Container>
                            <PostsList selector={(state) => getSelectedUniPosts(state, uniSelected)} showUser />
                        </Container>
                    </div>
                    :
                    <>
                        <div className="display-6 mx-3 text-center">Search trough posts from other universities!</div>
                        <UniversitiesGrid selectUni={setUniSelected} />
                    </>
            }

        </div>
    )
}
