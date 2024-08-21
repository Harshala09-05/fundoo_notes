import React from 'react'
import { Navigate } from 'react-router-dom'

export default function AuthRoute({children}) {
    let token = localStorage.getItem('token')
    if (!token) {
        return children
    }

    return <Navigate to='/dashboard' replace={true} />
}
