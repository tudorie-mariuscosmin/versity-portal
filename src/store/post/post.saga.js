import { takeLatest, put, call } from "redux-saga/effects";
import { createPost, getPosts, likePost, pushPost, setPosts, dislikePost, addComment } from "./post";
import { addLikePost, removeLikedPost } from '../user/user'
import { postFirebase, forwardTo, fetchPosts, likePostDb, dislikePostDb, addCommentDb } from './post.services'




function* addPostHandler(action) {
    try {
        let doc = yield call(postFirebase, action)
        yield call(forwardTo, "/profile");
        yield put(pushPost(doc))

    } catch (err) {
        console.error(err)
    }
}

function* fetchPostsHandler() {
    try {
        const posts = yield call(fetchPosts)
        yield put(setPosts(posts))
    } catch (err) {
        console.error(err)
    }
}

function* likePostHandler(action) {
    yield call(likePostDb, action)
    yield put(addLikePost(action.payload.postId))
}

function* dislikePostHandler(action) {
    yield call(dislikePostDb, action)
    yield put(removeLikedPost(action.payload.postId))
}

function* addCommentHandler(action) {
    yield call(addCommentDb, action)
}




export default function* postSaga() {
    yield takeLatest(createPost, addPostHandler)
    yield takeLatest(getPosts, fetchPostsHandler)
    yield takeLatest(likePost, likePostHandler)
    yield takeLatest(dislikePost, dislikePostHandler)
    yield takeLatest(addComment, addCommentHandler)
}