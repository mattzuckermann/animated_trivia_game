import React, { createContext } from "react"
import { useSessionStorage } from "../hooks/useSessionStorage"
export const GlobalContext = createContext(null)

export const RootLayout = ({ children }) => {
  const nulledArray = new Array<string | null>(10).fill(null)
  const [data, setData] = useSessionStorage("data", [])
  const [answers, setAnswers] = useSessionStorage("answers", nulledArray)
  const [isQuizFinished, setIsQuizFinished] = useSessionStorage(
    "isQuizFinished",
    false
  )
  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        answers,
        setAnswers,
        isQuizFinished,
        setIsQuizFinished,
        nulledArray,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
