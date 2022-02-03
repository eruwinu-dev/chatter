import React, { useContext } from "react"
import { XIcon } from "@heroicons/react/outline"

import SearchFriendResult from "./SearchFriendResult"

import ChatContext from "../../../../../context/chatContext"

const AddConvoPanel = () => {
    const { convoValues, setConvoValues } = useContext(ChatContext)

    const handleSearchFriend = (event) => {
        event.preventDefault()
        setConvoValues({ ...convoValues, searchFriendBar: event.target.value })
    }

    const closeAddConvoPanel = () => {
        setConvoValues({ ...convoValues, chatSpace: "blank" })
    }

    return (
        <div
            className={[
                "min-h-screen max-h-screen w-full",
                "flex flex-col items-center justify-center space-y-4",
            ].join(" ")}>
            <button
                type="button"
                className={[
                    "absolute right-4 top-4 p-2 w-10 h-10",
                    "rounded-full",
                    "bg-gray-100 hover:bg-gray-200",
                ].join(" ")}
                onClick={closeAddConvoPanel}>
                <XIcon />
            </button>
            <div className="flex-1"></div>
            <div
                className={[
                    "w-1/2 p-4",
                    "flex flex-col items-center justify-center",
                    "rounded-xl shadow-lg",
                ].join(" ")}>
                <span
                    className={[
                        "text-2xl font-bold tracking-wide text-gray-700",
                    ].join(" ")}>
                    Add Conversation
                </span>
                <input
                    type="text"
                    className={[
                        "w-full my-2 px-2 py-1.5",
                        "rounded-lg",
                        "bg-white",
                        "text-gray-700",
                        "focus:outline-none border-2",
                    ].join(" ")}
                    placeholder="Find a friend"
                    value={convoValues.searchFriendBar}
                    onChange={handleSearchFriend}
                />
            </div>
            <div
                className={[
                    "w-1/2",
                    "flex flex-col items-center justify-center",
                    "space-y-4",
                ].join(" ")}>
                {convoValues.searchFriendResults.length ? (
                    convoValues.searchFriendResults.map((profile, index) => (
                        <SearchFriendResult key={index} profile={profile} />
                    ))
                ) : (
                    <span>No results.</span>
                )}
            </div>
            <div className="flex-1"></div>
            <div className="flex-1"></div>
        </div>
    )
}

export default AddConvoPanel
