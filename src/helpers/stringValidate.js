export const isStringEmpty = (str) => {
    return str.replace(/^\s+|\s+$/g, "").length === 0
}
