import { takeLatest, put, call } from "@redux-saga/core/effects";
import { fetchUser, login, setUser } from "./user";
import { forwardTo, getUser, loginUser } from "./user.services";

function* handleLogin() {
    try {
        const user = yield call(loginUser)
        yield put(setUser(user))
        localStorage.setItem('uid', user.uid)
        yield call(forwardTo, "/")
    } catch (err) {
        console.log(err)
    }
}

function* handleFetchUser() {
    const user = yield call(getUser)
    if (user)
        yield put(setUser(user));

}

export default function* userSaga() {
    yield takeLatest(login, handleLogin)
    yield takeLatest(fetchUser, handleFetchUser)
}