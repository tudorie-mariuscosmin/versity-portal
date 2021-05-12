import React from 'react'
import { useSelector } from 'react-redux'
import Navigation from '../components/Navigation'

export default function Home() {
    const user = useSelector(state => state.user)
    return (
        <div>
            <Navigation />
        </div>
    )
}