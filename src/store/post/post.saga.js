import { takeLatest, put, call } from "redux-saga/effects";
import { createPost, getPosts, pushPost, setPosts } from "./post";
import { postFirebase, forwardTo, fetchPosts } from './post.services'




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





export default function* postSaga() {
    yield takeLatest(createPost, addPostHandler)
    yield takeLatest(getPosts, fetchPostsHandler)
}