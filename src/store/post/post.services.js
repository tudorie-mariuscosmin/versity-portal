import firebase from 'firebase'
import { history } from '../../App'

const db = firebase.firestore();

export const postFirebase = (action) => {
    return new Promise(async (resolve, reject) => {

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
            const post = await doc.get();
            const postData = post.data()
            postData.id = post.id
            postData.date = postData.date.toDate()
            resolve(postData)

        } catch (err) {
            console.log(err)
            reject(err)

        }
    })

}

export const fetchPosts = async () => {
    const postsRef = db.collection('posts')
    const postQuerySnapshot = await postsRef.get()
    const posts = [];
    postQuerySnapshot.forEach(doc => {
        const post = doc.data()
        post.id = doc.id
        post.date = post.date.toDate()
        posts.push(post)
    })
    return posts;
}

export const likePostDb = async (action) => {
    try {
        await db.collection('posts').doc(action.payload.postId).update({
            likes: firebase.firestore.FieldValue.increment(1)
        })
        await db.collection('users').doc(action.payload.uid).update({
            liked: firebase.firestore.FieldValue.arrayUnion(action.payload.postId)
        })
    } catch (err) {
        console.log(err)
    }

}

export const dislikePostDb = async (action) => {
    try {
        await db.collection('posts').doc(action.payload.postId).update({
            likes: firebase.firestore.FieldValue.increment(-1)
        })
        await db.collection('users').doc(action.payload.uid).update({
            liked: firebase.firestore.FieldValue.arrayRemove(action.payload.postId)
        })

    } catch (err) {

    }
}

export const addCommentDb = async (action) => {
    try {
        await db.collection('posts').doc(action.payload.postId).update({
            comments: firebase.firestore.FieldValue.arrayUnion(action.payload.comment)
        })
    } catch (err) {

    }
}


export const forwardTo = (location) => {
    history.push(location);
}