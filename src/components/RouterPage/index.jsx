import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom"

import { AuthState } from "../../context/authContext"
import { HomeState } from "../../context/homeContext"

import AuthPage from "../AuthPage"
import HomePage from "../HomePage"

const RouteProtector = ({ children, redirectTo }) => {
    const isSignedIn = Boolean(localStorage.getItem("@firebase-user"))
    return isSignedIn ? children : <Navigate to={redirectTo} />
}

const RouterPage = () => {
    return (
        <AuthState>
            <Router>
                <Routes>
                    <Route path="/*" element={<AuthPage />} />
                    <Route
                        path="/home/*"
                        element={
                            <RouteProtector redirectTo="/">
                                <HomeState>
                                    <HomePage />
                                </HomeState>
                            </RouteProtector>
                        }
                    />
                </Routes>
            </Router>
        </AuthState>
    )
}

export default RouterPage
