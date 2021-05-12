import { takeLatest, put, call } from "redux-saga/effects";
import { createPost, pushPost } from "./post";
import firebase from 'firebase'
import { history } from '../../App'

const postFirebase = (action) => {
    return new Promise(async (resolve, reject) => {
        const db = firebase.firestore();
        const storage = firebase.storage()
        const storageRef = storage.ref();
        const docData = {
            ...action.payload.post,
            likes: 0,
            comments: [],
            photoUrl: "",
            date: firebase.firestore.FieldValue.serverTimestamp()
        }
        try {
            let doc = await db.collection('posts').add(docData)
            const imgRef = storageRef.child(`posts/${doc.id}`);
            const imgSnapshot = await imgRef.putString(action.payload.photo, 'data_url')
            const imgUrl = await imgRef.getDownloadURL()
            await doc.update({ photoUrl: imgUrl })
            console.log('file-uploaded')
            console.log(imgSnapshot)
            resolve(doc)

        } catch (err) {
            console.log(err)
            reject(err)

        }
    })

}
function forwardTo(location) {
    console.log(history)
    history.push(location);
}

function* addPostHandler(action) {
    try {
        let doc = yield call(postFirebase, action)
        //console.log(doc.photoUrl)
        yield call(forwardTo, "/profile");
        yield put(pushPost(doc))
        //console.log(action)

    } catch (err) {
        console.log(err)
    }
}





export default function* postSaga() {
    yield takeLatest(createPost, addPostHandler)
}