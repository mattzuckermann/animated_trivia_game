import React, { useContext } from "react"
import { GlobalContext } from "../../layouts/rootLayout"
import { Context } from "../../@types/context"
import { Choice } from "./choice"

const decodeHtml = html => {
  var txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value
}

export const Question = ({
  question,
  currentQuestion,
  setCurrentQuestion,
  index,
}) => {
  const { answers, setIsQuizFinished } = useContext(GlobalContext) as Context

  return (
    <div style={{ margin: "50px 0px", position: "absolute" }}>
      <h3>Question {index + 1}</h3>
      <p>
        <small>
          <b>Category - </b> {question.category}
        </small>
      </p>
      <p>
        <small>
          <b>Difficulty - </b> {question.difficulty}
        </small>
      </p>
      <p style={{ width: "600px" }}>{decodeHtml(question.question)}</p>
      <Choice problemNumber={index} choice="True" />
      <Choice problemNumber={index} choice="False" />
      {currentQuestion <= 8 ? (
        <button
          type="submit"
          disabled={answers[currentQuestion] === null}
          onClick={e => {
            e.preventDefault()
            setCurrentQuestion(currentQuestion + 1)
          }}
        >
          NextQuestion
        </button>
      ) : (
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
      )}
    </div>
  )
}
