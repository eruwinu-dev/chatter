import React, { useContext } from "react"

import ChatContext from "../../../../context/chatContext"
import AddConvoPanel from "./AddConvoPanel"
import Welcome from "./Welcome"

const ChatSpace = () => {
    const { convoValues } = useContext(ChatContext)

    return (
        <div className={["min-h-screen max-h-screen flex-1"].join(" ")}>
            {convoValues.chatSpace === "blank" ? (
                <Welcome />
            ) : convoValues.chatSpace === "addConvo" ? (
                <AddConvoPanel />
            ) : (
                <div>Some convo is open</div>
            )}
        </div>
    )
}

export default ChatSpace
