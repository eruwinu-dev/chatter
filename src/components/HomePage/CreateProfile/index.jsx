import React, { useContext } from "react"

import HomeContext from "../../../context/homeContext"

import NameForm from "./NameForm"
import UsernameForm from "./UsernameForm"
import BirthDateForm from "./BirthDateForm"
import BioForm from "./BioForm"
import ProfileComplete from "./ProfileComplete"

const profilePanels = [
    <NameForm />,
    <BirthDateForm />,
    <UsernameForm />,
    <BioForm />,
    <ProfileComplete />,
]

const CreateProfile = () => {
    const { profileStage, checkProfileStage, setProfileStage } =
        useContext(HomeContext)
    return (
        <div
            className={[
                "min-h-screen max-h-screen w-full",
                "flex flex-col items-center justify-center",
            ].join(" ")}>
            {profilePanels.map((panel, index) => (
                <div
                    key={index}
                    className={[
                        "xs:w-3/4 sm:w-3/4 md:w-1/2 lg:w-1/3",
                        "rounded-lg shadow-lg",
                        profileStage === index
                            ? "flex flex-col items-center justify-center space-y-4"
                            : "hidden",
                    ].join(" ")}>
                    <div className="w-full px-4">{panel}</div>
                    <div
                        className={[
                            "w-full flex flex-row items-center justify-between px-4 pb-4",
                        ].join(" ")}>
                        <button
                            type="button"
                            className={[
                                "px-2 py-1.5",
                                "rounded",
                                "text-white font-bold text-sm",
                                profileStage
                                    ? "cursor-pointer bg-blue-300 hover:bg-blue-400"
                                    : "cursor-not-allowed bg-gray-100",
                            ].join(" ")}
                            onClick={() => {
                                if (!profileStage) return
                                setProfileStage(profileStage - 1)
                            }}>
                            Go Back
                        </button>
                        <button
                            type="button"
                            className={[
                                "px-2 py-1.5",
                                "rounded",
                                "text-white font-bold text-sm",
                                profileStage !== profilePanels.length - 1
                                    ? "cursor-pointer bg-blue-300 hover:bg-blue-400"
                                    : "cursor-not-allowed bg-gray-100",
                            ].join(" ")}
                            onClick={() => {
                                if (profileStage === profilePanels.length - 1)
                                    return
                                checkProfileStage()
                            }}>
                            Next
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CreateProfile
