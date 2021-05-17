import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/user/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Login() {
    const dispatch = useDispatch()
    const handleLogin = async () => {
        dispatch(login())
    }
    return (
        <div className=" vh-100 d-flex justify-content-center align-items-center ">
            <div className="card p-3 rounded">
                <h2 className="card-title m-4 mb-4">Welcome to my app</h2>
                <button className="btn btn-primary" onClick={handleLogin} >
                    <FontAwesomeIcon icon={['fab', 'google']} className="mx-2" />
                Sign in with google
            </button>

            </div>
        </div>
    )
}
