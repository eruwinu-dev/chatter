import React, { useContext } from "react"

import HomeContext from "../../../../context/homeContext"
import { isStringEmpty } from "../../../../helpers/stringValidate"

const NameForm = () => {
    const { profileValues, setProfileValues } = useContext(HomeContext)

    const handleNameChange = (prop) => (event) => {
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
                What's your name?
            </span>
            <div
                className={["w-full grid grid-rows-1 grid-cols-2 gap-x-2"].join(
                    " "
                )}>
                <div>
                    <label
                        htmlFor="first_name"
                        className={["font-semibold text-sm"].join(" ")}>
                        First Name
                    </label>
                    <input
                        type="text"
                        className={[
                            "w-full my-2 px-2 py-1.5",
                            "rounded-lg",
                            "bg-white",
                            "focus:outline-none border-2",
                            isStringEmpty(profileValues.first_name)
                                ? "border-red-500"
                                : "border-gray-200",
                        ].join(" ")}
                        onChange={handleNameChange("first_name")}
                        value={profileValues.first_name}
                        id="first_name"
                        placeholder="First Name"
                    />
                    <label
                        className={[
                            "font-semibold text-sm text-red-500",
                            isStringEmpty(profileValues.first_name)
                                ? "opacity-100"
                                : "opacity-0",
                        ].join(" ")}>
                        Required
                    </label>
                </div>
                <div>
                    <label
                        htmlFor="first_name"
                        className={["font-semibold text-sm"].join(" ")}>
                        Last Name
                    </label>
                    <input
                        type="text"
                        className={[
                            "w-full my-2 px-2 py-1.5",
                            "rounded-lg",
                            "bg-white",
                            "focus:outline-none border-2",
                            isStringEmpty(profileValues.last_name)
                                ? "border-red-500"
                                : "border-gray-200",
                        ].join(" ")}
                        onChange={handleNameChange("last_name")}
                        value={profileValues.last_name}
                        id="last_name"
                        placeholder="Last Name"
                    />
                    <label
                        className={[
                            "font-semibold text-sm text-red-500",
                            isStringEmpty(profileValues.last_name)
                                ? "opacity-100"
                                : "opacity-0",
                        ].join(" ")}>
                        Required
                    </label>
                </div>
            </div>
        </div>
    )
}

export default NameForm
