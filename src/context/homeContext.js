import React, { createContext, useState, useEffect } from "react"
import { initializeApp } from "firebase/app"
import {
    getFirestore,
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
} from "firebase/firestore"

import firebaseConfig from "./firebaseConfig"
import { isStringEmpty } from "../helpers/stringValidate"

const HomeContext = createContext()

export const HomeState = (props) => {
    const user = JSON.parse(localStorage.getItem("@firebase-user"))

    const initialProfileValues = {
        first_name: user.displayName.split(" ")[0],
        last_name: user.displayName.split(" ").slice(-1)[0],
        birth_month: new Date().getMonth(),
        birth_day: new Date().getDate(),
        birth_year: new Date().getFullYear() - 1,
        bio: "",
        user_name:
            user.displayName.split(" ")[0] +
            user.displayName.split(" ").slice(-1)[0],
        user_number: Math.floor(10000 * Math.random()),
        profile_pic: "",
    }

    const [nav, setNav] = useState(true)
    const [profileValues, setProfileValues] = useState(initialProfileValues)
    const [profileStage, setProfileStage] = useState(0)

    const [profile, setProfile] = useState(null)

    const [loading, setLoading] = useState(true)
    const [firstTime, setFirstTime] = useState(true)

    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)

    const checkProfileStage = () => {
        let passed = false
        if (!profileStage) {
            passed =
                !isStringEmpty(profileValues.first_name) &&
                !isStringEmpty(profileValues.last_name)
        } else if (profileStage === 1) {
            passed =
                !isStringEmpty(profileValues.user_name) &&
                profileValues.user_name.match(/^[0-9a-zA-Z]+$/)
        } else {
            passed = true
        }
        if (passed) {
            setProfileStage(profileStage + 1)
        }
    }

    const createProfile = async () => {
        try {
            setLoading(true)
            const { birth_month, birth_day, birth_year, ...rest } =
                profileValues
            const birth_date = new Date(birth_year, birth_month, birth_day)
            await addDoc(collection(db, "profiles"), {
                ...rest,
                birth_date: birth_date,
                user_id: user.uid,
                date_joined: new Date(),
            })
            setTimeout(() => {
                setFirstTime(false)
                setLoading(false)
            }, 1000)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        const ownProfile = query(
            collection(db, "profiles"),
            where("user_id", "==", user.uid)
        )
        const unsubscribe = onSnapshot(ownProfile, (snapshot) => {
            let changes = []
            let profiles = []
            snapshot.forEach((doc) => {
                profiles = [...profiles, doc.data()]
            })
            snapshot.docChanges().forEach((change) => {
                changes = [...changes, change.type === "removed"]
            })
            if (!changes.length || !snapshot.size) {
                setProfileStage(0)
        } else {
                setFirstTime(false)
                setProfile(profiles[0])
            }
        })
        return () => {
            unsubscribe()
        }
    }, [db, user.uid])

    const value = {
        nav,
        setNav,
        profileValues,
        setProfileValues,
        profileStage,
        setProfileStage,
        profile,
        checkProfileStage,
        firstTime,
        createProfile,
        loading,
    }
    return (
        <HomeContext.Provider value={value}>
            {props.children}
        </HomeContext.Provider>
    )
}

export default HomeContext
