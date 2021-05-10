import { takeLatest, put } from "@redux-saga/core/effects";




// function* fetchUserInfo() {
//     try {
//         const token = localStorage.getItem('token')
//         let { data } = yield axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`)
//         console.log(data)
//     } catch (err) {

//     }
// }

export default function* userSaga() {
    // yield takeLatest(getUserInfo, fetchUserInfo)
}