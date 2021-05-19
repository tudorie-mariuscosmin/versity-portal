import firebase from 'firebase'
import { history } from '../../App'


const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth();
const storage = firebase.storage()
const storageRef = storage.ref();

export const loginUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const { user } = await auth.signInWithPopup(provider)
            const usersCollectionRef = db.collection("users");
            let userDoc = await usersCollectionRef.doc(user.uid).get()
            if (userDoc.exists) {
                const userData = userDoc.data()

                resolve({ ...userData, uid: user.uid })
            } else {
                const userData = {
                    name: user.displayName,
                    email: user.email,
                    avatar: user.photoURL,
                    university: '',
                    liked: []
                }
                await usersCollectionRef.doc(user.uid).set(userData)
                resolve({ ...userData, uid: user.uid })
            }

        } catch (err) {
            console.log(err)
            reject(err)
        }
    })
}

export const getUser = async () => {
    try {
        const uid = localStorage.getItem('uid')
        if (uid) {
            const userDoc = await db.collection('users').doc(uid).get()
            if (userDoc.exists) {
                const userData = userDoc.data()
                return { ...userData, uid }
            }

        }
    } catch (err) {
        console.log(err)
    }
}
export const updateUserDb = async (action) => {
    try {
        const uid = localStorage.getItem('uid')
        let userRef = await db.collection('users').doc(uid)
        let imgUrl = null
        if (action.payload.photo) {
            const imgRef = storageRef.child(`users/${uid}`);
            await imgRef.putString(action.payload.photo, 'data_url')
            imgUrl = await imgRef.getDownloadURL()
        }
        let userUpdatedData = {
            name: action.payload.user.name,
            university: action.payload.user.university
        }
        console.log(imgUrl)
        if (imgUrl) {
            userUpdatedData.avatar = imgUrl
        }
        await userRef.update(userUpdatedData)
        return imgUrl


    } catch (err) {
        console.log(err)
    }
}

export const deleteUserDb = async () => {
    try {
        const uid = localStorage.getItem('uid')
        await db.collection('users').doc(uid).delete()
        const imgRef = storageRef.child(`users/${uid}`);
        await imgRef.delete()

    } catch (err) {
        console.log(err)
    }
}


export const forwardTo = (location) => {
    history.push(location);
}

