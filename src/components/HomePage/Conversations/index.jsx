import React, { useContext } from "react"

import { ChatAltIcon } from "@heroicons/react/outline"

import ChatSpace from "./ChatSpace"
import SettingsDropDown from "./SettingsDropdown"

import HomeContext from "../../../context/homeContext"
import ChatContext from "../../../context/chatContext"

const Conversations = () => {
    const { profile } = useContext(HomeContext)
    const { convoValues, setConvoValues } = useContext(ChatContext)

    const handleSearchBarChange = (event) => {
        event.preventDefault()
        setConvoValues({ ...convoValues, searchBar: event.target.value })
    }

    const openAddConvoPanel = () => {
        setConvoValues({ ...convoValues, chatSpace: "addConvo" })
    }

    return (
        <div
            className={[
                "min-h-screen max-h-screen w-full",
                "flex flex-row items-start justify-between",
            ].join(" ")}>
            <div
                className={[
                    "min-h-screen max-h-screen w-1/4",
                    "pt-4 pb-2 px-4 space-y-4",
                    "border-r-2",
                ].join(" ")}>
                <div
                    className={[
                        "w-full flex flex-row items-center space-evenly space-x-2",
                    ].join(" ")}>
                    <div>
                        {profile ? (
                            profile.profile_pic ? (
                                <img
                                    src={profile.profile_pic}
                                    alt={profile.user_name}
                                />
                            ) : (
                                <div
                                    className={[
                                        "w-8 h-8 rounded-full",
                                        "bg-gray-500",
                                    ].join(" ")}></div>
                            )
                        ) : null}
                    </div>
                    <div className={["flex-1"].join(" ")}>
                        <span
                            className={[
                                "text-2xl font-bold text-black tracking-tight lg:block hidden",
                            ].join(" ")}>
                            Conversations
                        </span>
                    </div>
                    <div
                        className={[
                            "flex flex-row items-center justify-between space-x-4",
                        ].join(" ")}>
                        <SettingsDropDown />
                        <button
                            type="button"
                            className={[
                                "w-10 h-10 p-2",
                                "rounded-full",
                                "bg-gray-100 hover:bg-gray-200",
                                "text-gray-700",
                                " lg:block hidden",
                            ].join(" ")}
                            onClick={openAddConvoPanel}>
                            <ChatAltIcon />
                        </button>
                    </div>
                </div>
                <div>
                    <input
                        type="text"
                        className={[
                            "w-full px-3 py-2",
                            "rounded-lg border-2",
                            "focus:outline-none",
                        ].join(" ")}
                        placeholder="Search Chatter"
                        onChange={handleSearchBarChange}
                        value={convoValues.searchBar}
                    />
                </div>
            </div>
            <ChatSpace />
        </div>
    )
}

export default Conversations
