import React, { createContext } from "react"
import { initializeApp } from "firebase/app"
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    getAuth,
    signOut,
} from "firebase/auth"

import firebaseConfig from "./firebaseConfig"
import useStickyState from "../helpers/useStickyState"

const AuthContext = createContext()

export const AuthState = (props) => {
    const [user, setUser] = useStickyState("@firebase-user", null)

    initializeApp(firebaseConfig)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const firebaseSignIn = async (provider) => {
        try {
            const auth = getAuth()
            const signInResult = await signInWithPopup(
                auth,
                provider === "google"
                    ? googleProvider
                    : provider === "github"
                    ? githubProvider
                    : null
            )
            const signInUser = signInResult.user
            setUser(signInUser)
        } catch (error) {
            console.log(error)
        }
    }

    const firebaseSignOut = async () => {
        try {
            const auth = getAuth()
            await signOut(auth)
            setUser(null)
        } catch (error) {
            console.log(error)
        }
    }

    const value = {
        firebaseSignIn,
        firebaseSignOut,
        user: user,
    }
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
