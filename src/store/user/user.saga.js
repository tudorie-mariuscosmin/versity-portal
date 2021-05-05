import { takeLatest, put } from "@redux-saga/core/effects";
import { setName, login } from "./user";


function* handleLogin() {
    console.log("a ajuns aici")
    yield put(setName("marius"))
    //yield put(setUser(action.payload.name, action.payload.id, action.payload.email))

}

export default function* userSaga() {
    yield takeLatest(login, handleLogin)
}