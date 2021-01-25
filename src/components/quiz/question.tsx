import React from "react"
import { Choice } from "./choice"

const decodeHtml = html => {
  var txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value
}

export const Question = ({ question, index }) => {
  return (
    <div style={{ margin: "50px 0px" }}>
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
      <p>{decodeHtml(question.question)}</p>
      <Choice problemNumber={index} choice="True" />
      <Choice problemNumber={index} choice="False" />
      <hr />
    </div>
  )
}
