import React, { useContext } from "react"
import { Navigate } from "react-router-dom"

import AuthContext from "../../context/authContext"
import HomeContext from "../../context/homeContext"

import LoadingScreen from "./LoadingScreen"

const HomePage = () => {
    const { user, firebaseSignOut } = useContext(AuthContext)
    const { loading, firstTime } = useContext(HomeContext)
    if (!user) {
        return <Navigate to="/" />
    }

    if (loading) {
        return <LoadingScreen />
    }

    if (firstTime) {
        return <div>First Time</div>
    }

    return (
        <div>
            Hello
            <button type="button" onClick={() => firebaseSignOut()}>
                Sign Out
            </button>
        </div>
    )
}

export default HomePage
