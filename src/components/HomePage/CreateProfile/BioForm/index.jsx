import React, { useContext } from "react"

import HomeContext from "../../../../context/homeContext"

const BioForm = () => {
    const { profileValues, setProfileValues } = useContext(HomeContext)

    const handleBioChange = (prop) => (event) => {
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
                Tell us something about yourself.
            </span>
            <div
                className={["w-full grid grid-rows-1 grid-cols-1 gap-x-2"].join(
                    " "
                )}>
                <div>
                    <label
                        htmlFor="bio"
                        className={["font-semibold text-sm"].join(" ")}>
                        Bio
                    </label>
                    <textarea
                        rows="3"
                        className={[
                            "w-full my-2 px-2 py-1.5",
                            "rounded-lg",
                            "text-gray-700",
                            "bg-white",
                            "focus:outline-none border-2",
                            "border-gray-200",
                            "resize-none",
                        ].join(" ")}
                        onChange={handleBioChange("bio")}
                        value={profileValues.bio}
                        id="bio"
                        placeholder="Just a short paragraph will do."
                    />
                </div>
            </div>
        </div>
    )
}

export default BioForm
