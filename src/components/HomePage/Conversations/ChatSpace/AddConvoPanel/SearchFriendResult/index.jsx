import React from "react"

const SearchFriendResult = ({ profile }) => {
    return (
        <div
            className={[
                "w-full p-4",
                "rounded-lg shadow-md",
                "flex flex-row items-center justify-between",
                "hover:shadow-md hover:bg-gray-100 hover:cursor-pointer",
            ].join(" ")}>
            <div
                className={["w-8 h-8", "bg-gray-200", "rounded-full"].join(
                    " "
                )}></div>
            <div
                className={["flex-1 pl-4", "text-gray-700 font-semibold"].join(
                    " "
                )}>
                {`${profile.first_name} ${profile.last_name}`}
            </div>
        </div>
    )
}

export default SearchFriendResult
