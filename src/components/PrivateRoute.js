import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser } from '../store/user/user.selectors'

export default function PrivateRoute({ component: Component, ...rest }) {
    const user = useSelector(getUser)
    return (
        <Route {...rest} render={props =>
            user.uid ? <Component {...props} /> : <Redirect to="/login" />
        }>

        </Route >
    )
}
