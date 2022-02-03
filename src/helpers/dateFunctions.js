export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

export const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate()
}

export const numberRange = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start)
}
