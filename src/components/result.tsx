import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"
import { GlobalContext } from "../layouts/rootLayout"
import { Context, QuestionType } from "../@types/context"

const decodeHtml = html => {
  var txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value
}

export const Result = ({ data }) => {
  const { answers } = useContext(GlobalContext) as Context

  const calculateQuizPercentage = quizQuestions => {
    let quizPoints = 0
    quizQuestions.forEach((question: QuestionType, index: number) => {
      if (question.correct_answer === answers[index]) quizPoints++
    })
    return `${(quizPoints / answers.length) * 100}%`
  }

  useEffect(() => {
    calculateQuizPercentage(data.results)
  }, [])

  return (
    <>
      <h1>You got a score of {calculateQuizPercentage(data.results)}</h1>
      <h3>
        <Link to="/take-quiz">Play again?</Link>
      </h3>
      {data?.results?.map((question: QuestionType, index: number) => {
        return (
          <section key={index} style={{ margin: "50px 0px" }}>
            <h3>Question {index + 1}</h3>
            <p>{decodeHtml(question.question)}</p>
            <p>
              <small>
                You chose
                <b> {answers[index]}</b>
              </small>
            </p>
            <p>
              <small>
                The correct answer was<b> {question.correct_answer}</b>
              </small>
            </p>
            <p>
              <small>
                You got it
                <span>
                  {" "}
                  {answers[index] === question.correct_answer
                    ? "right!"
                    : "wrong."}
                </span>
              </small>
            </p>
          </section>
        )
      })}
    </>
  )
}
