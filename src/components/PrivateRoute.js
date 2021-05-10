import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PrivateRoute({ component: Component, ...rest }) {
    const user = useSelector(state => state.user)
    return (
        <Route {...rest} render={props =>
            user.uid ? <Component {...props} /> : <Redirect to="/login" />
        }>

        </Route >
    )
}
