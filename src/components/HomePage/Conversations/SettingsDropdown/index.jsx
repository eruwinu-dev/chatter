import React, { Fragment, useContext } from "react"
import { Menu, Transition } from "@headlessui/react"
import {
    DotsHorizontalIcon,
    LogoutIcon,
    MenuIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/outline"

import AuthContext from "../../../../context/authContext"

const SettingsDropDown = () => {
    const { firebaseSignOut } = useContext(AuthContext)
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    className={[
                        "w-10 h-10 p-2",
                        "rounded-full",
                        "bg-gray-100 hover:bg-gray-200",
                        "text-gray-700",
                    ].join(" ")}>
                    <DotsHorizontalIcon />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items
                    className={[
                        "absolute left-0 w-72 mt-2 origin-top-left",
                        "bg-white",
                        "divide-y divide-gray-100",
                        "rounded-md shadow-lg",
                        "ring-1 ring-black ring-opacity-5",
                        "focus:outline-none",
                    ].join(" ")}>
                    <div className="px-1.5 py-1.5">
                        <Menu.Item>
                            <button
                                type="button"
                                className={[
                                    "w-full px-2 py-2",
                                    "flex flex-row items-center justify-start",
                                    "rounded-lg",
                                    "text-left font-semibold",
                                    "hover:bg-gray-100",
                                ].join(" ")}>
                                <span className={["w-6 h-6", "mr-2"].join(" ")}>
                                    <QuestionMarkCircleIcon />
                                </span>
                                Help
                            </button>
                        </Menu.Item>
                        <Menu.Item>
                            <button
                                type="button"
                                className={[
                                    "w-full px-2 py-2",
                                    "flex flex-row items-center justify-start",
                                    "rounded-lg",
                                    "text-left font-semibold",
                                    "hover:bg-gray-100",
                                ].join(" ")}>
                                <span className={["w-6 h-6", "mr-2"].join(" ")}>
                                    <MenuIcon />
                                </span>
                                About
                            </button>
                        </Menu.Item>
                        <Menu.Item>
                            <button
                                type="button"
                                className={[
                                    "w-full px-2 py-2",
                                    "flex flex-row items-center justify-start",
                                    "rounded-lg",
                                    "text-left font-semibold",
                                    "hover:bg-gray-100",
                                ].join(" ")}
                                onClick={() => firebaseSignOut()}>
                                <span className={["w-6 h-6", "mr-2"].join(" ")}>
                                    <LogoutIcon />
                                </span>
                                Sign Out
                            </button>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default SettingsDropDown
