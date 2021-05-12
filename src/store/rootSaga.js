import { all } from 'redux-saga/effects'
import userSaga from './user/user.saga'
import postSaga from './post/post.saga'
export default function* rootSaga() {
    yield all([
        userSaga(),
        postSaga()
    ])
}