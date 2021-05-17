import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest }) {
    const uid = localStorage.getItem("uid")
    return (
        <Route {...rest} render={props =>
            uid ? <Component {...props} /> : <Redirect to="/login" />
        }>

        </Route >
    )
}
