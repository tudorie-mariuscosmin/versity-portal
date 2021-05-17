import firebase from 'firebase'
import { history } from '../../App'


const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth();

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
                    likes: []
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
        const userDoc = await db.collection('users').doc(uid).get()
        if (userDoc.exists) {
            const userData = userDoc.data()
            return { ...userData, uid }
        }
    } catch (err) {
        console.log(err)
    }
}

export const forwardTo = (location) => {
    history.push(location);
}

