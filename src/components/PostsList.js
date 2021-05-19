import React, { useEffect } from 'react'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPosts } from '../store/post/post.selectors'
import { getPosts } from '../store/post/post'

export default function PostsList({ showUni, selector, showUser }) {
    const dispatch = useDispatch()
    const posts = useSelector(selector)
    useEffect(() => {
        dispatch(getPosts())
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
            <div>
                No posts
            </div>

        )



}
