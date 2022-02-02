import { useState, useEffect } from "react"

const useStickyState = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const lastSavedValue = localStorage.getItem(key)
    return lastSavedValue !== null ? JSON.parse(lastSavedValue) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useStickyState
