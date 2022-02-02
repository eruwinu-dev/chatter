import React, { useContext } from "react"
import { Navigate } from "react-router-dom"

import AuthContext from "../../context/authContext"

import googleLogo from "../../assets/google_logo.png"

const AuthPage = () => {
    const { user, firebaseSignIn } = useContext(AuthContext)
    if (user) {
        return <Navigate to="/home" />
    }
    return (
        <div
            className={[
                "min-h-screen max-h-screen max-w-full",
                "flex flex-col items-center justify-center",
            ].join(" ")}>
            <div
                className={[
                    "w-1/2 lg:w-1/3 h-full",
                    "space-y-4",
                    "flex flex-col items-center justify-center",
                    "rounded-xl shadow-lg",
                ].join(" ")}>
                <span
                    className={[
                        "w-full text-center bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500",
                        "text-5xl font-bold tracking-wider",
                        "text-white",
                        "p-4",
                        "rounded-t-xl",
                    ].join(" ")}>
                    Chatter
                </span>
                <span
                    className={[
                        "text-center text-gray-700 text-lg font-semibold",
                    ].join(" ")}>
                    Chatting made simple.
                </span>
                <div
                    className={[
                        "w-full px-4 pb-4",
                        "flex flex-col items-center justify-center space-y-4",
                    ].join(" ")}>
                    <button
                        type="button"
                        className={[
                            "w-full py-3 px-4",
                            "flex flex-row items-center relative",
                            "bg-gray-100 hover:bg-gray-200",
                            "text-gray-500 font-bold",
                            "rounded",
                        ].join(" ")}
                        onClick={() => firebaseSignIn("google")}>
                        <img
                            src={googleLogo}
                            alt="Google Icon"
                            className="h-6 absolute"
                        />
                        <span className="flex-1">Sign in with Google</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AuthPage
