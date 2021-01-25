import React, { useContext, useEffect } from "react"
import { Question } from "./question"
import { GlobalContext } from "../../layouts/rootLayout"
import { Context, QuestionType } from "../../@types/context"
import { motion } from "framer-motion"

export const Quiz = ({ data }) => {
  const { answers, setAnswers, setIsQuizFinished, nulledArray } = useContext(
    GlobalContext
  ) as Context

  useEffect(() => {
    setAnswers(nulledArray)
    setIsQuizFinished(false)
  }, [])

  const subLineVariants = {
    mounted: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const imageVariants = {
    unmounted: {
      opacity: 0,
    },
    mounted: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <>
      <motion.div
        variants={subLineVariants}
        initial="unmounted"
        animate="mounted"
      >
        {data?.results?.map((question: QuestionType, index: number) => {
          return (
            <motion.div variants={imageVariants}>
              <Question key={index} question={question} index={index} />
            </motion.div>
          )
        })}
      </motion.div>
      <button
        type="submit"
        disabled={answers.includes(null)}
        onClick={e => {
          e.preventDefault()
          setIsQuizFinished(true)
          window.location.replace("/view-result")
        }}
      >
        Submit
      </button>
    </>
  )
}
