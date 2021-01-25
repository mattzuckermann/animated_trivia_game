import React, { useState, useEffect, useContext } from "react"
import { Question } from "./question"
import { GlobalContext } from "../../layouts/rootLayout"
import { Context, QuestionType } from "../../@types/context"
import { AnimatePresence, motion } from "framer-motion"

export const Quiz = ({ data }) => {
  const { setAnswers, setIsQuizFinished, nulledArray } = useContext(
    GlobalContext
  ) as Context
  const [currentQuestion, setCurrentQuestion] = useState(0)

  useEffect(() => {
    setAnswers(nulledArray)
    setIsQuizFinished(false)
  }, [])

  return (
    <>
      <div style={{ position: "relative" }}>
        {data?.results?.map((question: QuestionType, index: number) => {
          return (
            <AnimatePresence>
              {currentQuestion === index && (
                <motion.div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Question
                    key={index}
                    question={question}
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    index={index}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )
        })}
      </div>
    </>
  )
}
