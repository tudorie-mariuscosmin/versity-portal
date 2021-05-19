import React from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row, Image as BootstrapImage } from 'react-bootstrap'
import styled from 'styled-components'
import { dislikePost, likePost, addComment } from '../store/post/post'
import Comments from './Comments'
import Image from './Image'
import { useSelector } from 'react-redux'
import { getUser, } from '../store/user/user.selectors'
import LikeButton from './LikeButton'
import { useState } from 'react'

const DateContainer = styled.div`
    float:right;
    font-size:0.9em;
    font-style:italic;
    color:grey;
`
const UserContainer = styled.div`

    font-size:0.9em;
    font-weight:bold;
    display: ${props => props.show ? 'block' : 'none'};
    align-items:center;
`
const Avatar = styled(BootstrapImage)`
    width:25px;
    height:25px;
    padding:1px;
    background-color:#0d6efd;
    margin-right:5px;
`
const UniContainer = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    font-size:0.9em;
    float:right;
`
export default function Post({ post, showUni, showUser }) {
    const user = useSelector(getUser)
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()
    const likeHandler = () => {
        dispatch(likePost({ postId: post.id, uid: user.uid }))
    }
    const dislikeHandler = () => {
        dispatch(dislikePost({ postId: post.id, uid: user.uid }))
    }
    const addCommentHandler = () => {
        dispatch(addComment({
            postId: post.id, comment: {
                name: user.name,
                text: comment
            }
        }))
        setComment('')
    }

    return (
        <div className="my-2">
            <div className="d-flex justify-content-between">
                <UserContainer show={showUser}>
                    <Avatar src={post.user.avatar} roundedCircle />
                    {post.user.name}
                </UserContainer>

                <DateContainer>{post.date.toDateString()}</DateContainer>
            </div>
            <Image className="mx-auto" source={post.photoUrl} fullWidth />
            <Row className="mt-1">
                <Col >
                    <div className="d-flex align-items-center h6">
                        <LikeButton liked={post.liked} onLike={likeHandler} onDislike={dislikeHandler} />
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
                    <input className="form-control form-control-sm" type="text" placeholder="Add Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                    <button className="btn btn-primary" onClick={addCommentHandler}>
                        <FontAwesomeIcon icon={['fas', 'plus']} />
                    </button>

                </div>
                <Comments comments={post.comments} />
            </Row>
        </div>

    )
}
