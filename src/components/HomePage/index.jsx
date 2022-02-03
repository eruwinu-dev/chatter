import React, { useContext } from "react"
import { Navigate } from "react-router-dom"

import AuthContext from "../../context/authContext"
import HomeContext from "../../context/homeContext"

import LoadingScreen from "./LoadingScreen"
import CreateProfile from "./CreateProfile"

import Conversations from "./Conversations"

import { ChatState } from "../../context/chatContext"

const HomePage = () => {
    const { user } = useContext(AuthContext)
    const { loading, firstTime } = useContext(HomeContext)
    if (!user) {
        return <Navigate to="/" />
    }

    if (firstTime) {
        if (loading) {
            return <LoadingScreen />
        }
        return <CreateProfile />
    } else {
        if (loading) {
            return <LoadingScreen />
        }
        return (
            <ChatState>
                <Conversations />
            </ChatState>
        )
    }
}

export default HomePage
