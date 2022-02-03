import React, { useContext } from "react"

import HomeContext from "../../../../context/homeContext"

const ProfileComplete = () => {
    const { profileValues, createProfile } = useContext(HomeContext)
    return (
        <div
            className={[
                "w-full",
                "flex flex-col items-center justify-center space-y-8 text-center",
            ].join(" ")}>
            <div
                className={[
                    "w-full",
                    "flex flex-col items-center justify-center space-y-4",
                ]}>
                <div
                    className={[
                        "w-full",
                        "text-gray-700 text-lg font-semibold",
                    ].join(" ")}>
                    Hello, @{profileValues.user_name}#
                    {profileValues.user_number}!
                </div>
                <span className={["text-gray-700 text-base"].join(" ")}>
                    We are excited for you to be part of the family.
                </span>
                <button
                    type="button"
                    className={[
                        "w-full px-2 py-1.5 rounded",
                        "bg-emerald-500",
                        "hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500",
                        "text-white font-bold",
                    ].join(" ")}
                    onClick={() => createProfile()}>
                    Submit Profile
                </button>
            </div>
        </div>
    )
}

export default ProfileComplete
