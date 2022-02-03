import React from "react"

const Welcome = () => {
    return (
        <div
            className={[
                "min-h-screen max-h-screen w-full",
                "flex flex-col items-center justify-center space-y-4",
            ].join(" ")}>
            <div
                className={[
                    "w-1/2 p-4",
                    "rounded-lg shadow-lg",
                    "flex flex-col items-center justify-center",
                    "space-y-4",
                ].join(" ")}>
                <span
                    className={[
                        "text-center text-2xl text-gray-700 font-bold",
                    ].join(" ")}>
                    Your Chat Space.
                </span>
                <span
                    className={["text-center text-gray-700 font-semibold"].join(
                        " "
                    )}>
                    Find a friend or select a conversation.
                </span>
            </div>
        </div>
    )
}

export default Welcome
