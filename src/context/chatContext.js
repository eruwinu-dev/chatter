import React, { createContext, useState, useEffect, useCallback } from "react"
import { initializeApp } from "firebase/app"
import {
    getFirestore,
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
    getDocs,
} from "firebase/firestore"

import firebaseConfig from "./firebaseConfig"
import useDebounce from "../helpers/useDebounce"

const ChatContext = createContext()

export const ChatState = (props) => {
    const user = JSON.parse(localStorage.getItem("@firebase-user"))
    const initialConvoValues = {
        searchConvoBar: "",
        searchConvoResults: [],
        searchConvoLoading: false,
        searchFriendBar: "",
        searchFriendResults: [],
        searchFriendLoading: false,
        chatSpace: "blank",
        conversations: [],
        currentConversation: null,
    }

    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)

    const [convoValues, setConvoValues] = useState(initialConvoValues)

    const searchFriends = async () => {
        const allVisibleProfiles = query(collection(db, "profiles"))
        let searchFriendQuery = []
        const searchFriendSnapshots = await getDocs(allVisibleProfiles)
        searchFriendSnapshots.forEach((doc) => {
            searchFriendQuery = [
                ...searchFriendQuery,
                { ...doc.data(), id: doc.id },
            ]
        })
        setConvoValues({
            ...convoValues,
            searchFriendResults: searchFriendQuery,
        })
    }

    useEffect(() => {
        searchFriends()
    }, [])

    // const debouncedSearchFriend = useDebounce(convoValues.searchFriendBar, 500)

    // useEffect(() => {
    //     if (debouncedSearchFriend) {
    //         setConvoValues({ ...convoValues, searchFRiendLoading: true })

    //     }
    // })

    const value = {
        user,
        convoValues,
        setConvoValues,
    }
    return (
        <ChatContext.Provider value={value}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatContext
