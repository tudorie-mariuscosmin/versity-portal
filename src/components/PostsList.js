import React, { useEffect } from 'react'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPosts } from '../store/post/post.selectors'
import { getPosts } from '../store/post/post'

export default function PostsList({ showUni }) {
    const dispatch = useDispatch()
    const posts = useSelector(getUserPosts)
    useEffect(() => {
        dispatch(getPosts())
    }, [])
    if (posts.length > 0)
        return (
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post} showUni={showUni} />)
                }
            </div>
        )
    else
        return (
            <div>
                No posts
            </div>

        )



}
