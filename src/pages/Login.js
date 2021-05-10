import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setUser } from '../store/user/user'
import { auth } from '../services/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import firebase from 'firebase'
const provider = new firebase.auth.GoogleAuthProvider()



export default function Login() {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleLogin = async () => {
        const { user } = await auth.signInWithPopup(provider)
        const payload = {
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            avatar: user.photoUrl,
        }
        dispatch(setUser(payload))
        history.push("/")
    }
    return (
        <div className=" vh-100 d-flex justify-content-center align-items-center ">
            <div className="card p-5">
                <h2 className="card-title m-4 m-b-4">Welcome to my app</h2>
                <button className="btn btn-primary" onClick={handleLogin} >
                    <FontAwesomeIcon icon={['fab', 'google']} className="mx-2" />
                Sign in with google
            </button>

            </div>
        </div>
    )
}
