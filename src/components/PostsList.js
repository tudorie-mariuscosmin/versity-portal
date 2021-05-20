import React, { useEffect } from 'react'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../store/post/post'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CenteredDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:100px;
`

export default function PostsList({ showUni, selector, showUser }) {
    const dispatch = useDispatch()
    const posts = useSelector(selector)

    useEffect(() => {
        dispatch(getPosts())
        // eslint-disable-next-line
    }, [])
    if (posts.length > 0)
        return (
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post} showUni={showUni} showUser={showUser} />)
                }
            </div>
        )
    else
        return (
            <CenteredDiv>
                <FontAwesomeIcon icon={['fas', 'box-open']} size="8x" />
                <div className="display-5 mx-3 text-center">No posts found</div>
            </CenteredDiv>

        )



}
