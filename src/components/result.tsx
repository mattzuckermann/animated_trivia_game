import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import { GlobalContext } from "../layouts/rootLayout"
import { Context, QuestionType } from "../@types/context"
import { Answer } from "./answer"

export const Result = ({ data }) => {
  const { answers } = useContext(GlobalContext) as Context
  const calculateQuizPercentage = (quizQuestions: QuestionType[]) => {
    let quizPoints = 0
    quizQuestions.forEach((question: QuestionType, index: number) => {
      if (question.correct_answer === answers[index]) quizPoints++
    })
    return {
      percentage: `${(quizPoints / answers.length) * 100}%`,
      points: quizPoints,
    }
  }
  const [result] = useState(calculateQuizPercentage(data.results))

  return (
    <>
      <h1>
        You got a score of {result.percentage} ({result.points}/{answers.length}
        )
      </h1>
      <h3>
        <Link to="/">Play again?</Link>
      </h3>
      {data?.results?.map((question: QuestionType, index: number) => {
        return <Answer key={index} question={question} index={index} />
      })}
    </>
  )
}
