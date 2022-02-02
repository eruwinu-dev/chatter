import React from "react"

const LoadingScreen = () => {
    return (
        <div
            className={[
                "min-h-screen max-h-screen w-full",
                "flex flex-col items-center justify-center",
                "space-y-10",
            ].join(" ")}>
            <div
                className={[
                    "flex flex-row items-center justify-center",
                    "space-x-10",
                ].join(" ")}>
                <span
                    className={[
                        "animate-ping block",
                        "h-4 w-4",
                        "rounded-full",
                        "bg-purple-500",
                    ].join(" ")}></span>
                <span
                    className={[
                        "animate-ping block",
                        "h-4 w-4",
                        "rounded-full",
                        "bg-blue-500",
                    ].join(" ")}></span>
                <span
                    className={[
                        "animate-ping block",
                        "h-4 w-4",
                        "rounded-full",
                        "bg-cyan-500",
                    ].join(" ")}></span>
            </div>
            <span
                className={[
                    "text-gray-700 font-semibold",
                    "tracking-wide",
                ].join(" ")}>
                Loading ...
            </span>
        </div>
    )
}

export default LoadingScreen
