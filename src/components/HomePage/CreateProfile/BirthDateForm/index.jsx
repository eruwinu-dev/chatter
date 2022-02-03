import React, { useContext } from "react"

import HomeContext from "../../../../context/homeContext"
import {
    months,
    daysInMonth,
    numberRange,
} from "../../../../helpers/dateFunctions"

const BirthDateForm = () => {
    const { profileValues, setProfileValues } = useContext(HomeContext)

    const handleDateChange = (prop) => (event) => {
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
                When is your birthday?
            </span>
            <div
                className={["w-full grid grid-rows-1 grid-cols-3 gap-x-2"].join(
                    " "
                )}>
                <div>
                    <label
                        htmlFor="birth_month"
                        className={["font-semibold text-sm"].join(" ")}>
                        Month
                    </label>
                    <select
                        className={[
                            "w-full px-2 py-2 rounded-lg",
                            "text-gray-700",
                            "border-2 border-gray-200",
                            "focus:outline-none",
                        ].join(" ")}
                        value={profileValues.birth_month}
                        onChange={handleDateChange("birth_month")}
                        id="birth_month">
                        {months.map((month, index) => (
                            <option key={index} value={index}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="birth_day"
                        className={["font-semibold text-sm"].join(" ")}>
                        Month
                    </label>
                    <select
                        className={[
                            "w-full px-2 py-2 rounded-lg",
                            "text-gray-700",
                            "border-2 border-gray-200",
                            "focus:outline-none",
                        ].join(" ")}
                        value={profileValues.birth_day}
                        onChange={handleDateChange("birth_day")}
                        id="birth_day">
                        {[
                            ...Array(
                                daysInMonth(
                                    Number(profileValues.birth_month) + 1,
                                    Number(profileValues.birth_year)
                                )
                            ).keys(),
                        ].map((day, index) => (
                            <option key={index + 1} value={day + 1}>
                                {day + 1}
                            </option>
                        ))}
                    </select>
                    <label
                        className={[
                            "font-semibold text-sm text-red-500",
                            "opacity-0",
                        ].join(" ")}>
                        *
                    </label>
                </div>
                <div>
                    <label
                        htmlFor="birth_year"
                        className={["font-semibold text-sm"].join(" ")}>
                        Month
                    </label>
                    <select
                        className={[
                            "w-full px-2 py-2 rounded-lg",
                            "text-gray-700",
                            "border-2 border-gray-200",
                            "focus:outline-none",
                        ].join(" ")}
                        value={profileValues.birth_year}
                        onChange={handleDateChange("birth_year")}
                        id="birth_year">
                        {numberRange(1960, new Date().getFullYear()).map(
                            (year, index) => (
                                <option key={index} value={year}>
                                    {year}
                                </option>
                            )
                        )}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default BirthDateForm
