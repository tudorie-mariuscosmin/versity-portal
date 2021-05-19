import { takeLatest, put, call } from "@redux-saga/core/effects";
import { deleteAccount, fetchUser, login, logout, setUser, updateUser, updateUserAvatar, setLoadingStatus } from "./user";
import { deleteUserDb, forwardTo, getUser, loginUser, updateUserDb } from "./user.services";

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

function* updateUserHandler(action) {
    yield put(setLoadingStatus(true))
    const imgUrl = yield call(updateUserDb, action)
    if (imgUrl) {
        yield put(updateUserAvatar(imgUrl))
    }
    yield put(setLoadingStatus(false))
}

function* deleteAccountHandler(action) {
    yield put(setLoadingStatus(true))
    yield call(deleteUserDb)
    yield put(logout())
    yield call(forwardTo, '/login')
}

export default function* userSaga() {
    yield takeLatest(login, handleLogin)
    yield takeLatest(fetchUser, handleFetchUser)
    yield takeLatest(updateUser, updateUserHandler)
    yield takeLatest(deleteAccount, deleteAccountHandler)
}