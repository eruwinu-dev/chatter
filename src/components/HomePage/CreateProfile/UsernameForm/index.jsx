import React, { useContext } from "react"

import HomeContext from "../../../../context/homeContext"
import { isStringEmpty } from "../../../../helpers/stringValidate"

const UsernameForm = () => {
    const { profileValues, setProfileValues } = useContext(HomeContext)

    const handleUsernameChange = (prop) => (event) => {
        event.preventDefault()
        setProfileValues({ ...profileValues, [prop]: event.target.value })
    }

    return (
        <div
            className={[
                "w-full",
                "flex flex-col items-center justify-center space-y-8",
            ].join(" ")}>
            <span className={["text-gray-700 text-lg font-semibold"].join(" ")}>
                Pick a username.
            </span>
            <div
                className={["w-full grid grid-rows-1 grid-cols-2 gap-x-2"].join(
                    " "
                )}>
                <div>
                    <label
                        htmlFor="user_name"
                        className={["font-semibold text-sm"].join(" ")}>
                        Username
                    </label>
                    <input
                        type="text"
                        className={[
                            "w-full my-2 px-2 py-1.5",
                            "rounded-lg",
                            "bg-white",
                            "text-gray-700",
                            "focus:outline-none border-2",
                            isStringEmpty(profileValues.user_name)
                                ? "border-red-500"
                                : "border-gray-200",
                        ].join(" ")}
                        onChange={handleUsernameChange("user_name")}
                        value={profileValues.user_name}
                        id="user_name"
                        placeholder="Username"
                    />
                    <label
                        className={[
                            "font-semibold text-sm text-red-500",
                            isStringEmpty(profileValues.user_name) ||
                            !profileValues.user_name.match(/^[0-9a-zA-Z]+$/)
                                ? "opacity-100"
                                : "opacity-0",
                        ].join(" ")}>
                        Required
                    </label>
                </div>
                <div>
                    <label
                        htmlFor="user_name"
                        className={["font-semibold text-sm"].join(" ")}>
                        User Number
                    </label>
                    <input
                        type="text"
                        disabled
                        className={[
                            "w-full my-2 px-2 py-1.5",
                            "rounded-lg",
                            "bg-gray-100",
                            "focus:outline-none border-2",
                            "text-gray-700",
                            "border-gray-200",
                            "cursor-not-allowed",
                        ].join(" ")}
                        value={profileValues.user_number}
                        id="user_name"
                        placeholder="User Number"
                    />
                </div>
            </div>
        </div>
    )
}

export default UsernameForm
