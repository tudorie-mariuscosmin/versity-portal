import { takeLatest, put, call } from "@redux-saga/core/effects";
import { fetchUnis, setUnis } from "./universities";
import { getUniversities } from "./universities.services";


function* fetchUnisHandler() {
    const unis = yield call(getUniversities)
    yield put(setUnis(unis))
}


export default function* universitiesSaga() {
    yield takeLatest(fetchUnis, fetchUnisHandler)
}