import React, { ReactElement, useContext } from "react"
import { GlobalContext } from "../../layouts/rootLayout"
import { Context } from "../../@types/context"

type Props = {
  problemNumber: number
  choice: string
}

export const Choice = ({ problemNumber, choice }: Props): ReactElement => {
  const { answers, setAnswers } = useContext(GlobalContext) as Context
  return (
    <label htmlFor={choice}>
      {choice}
      <input
        type="radio"
        name={`question${problemNumber + 1}`}
        id={choice}
        value={choice}
        onChange={e => {
          const target = e.target as HTMLInputElement
          const newArrayState = answers.slice()
          newArrayState[problemNumber] = target.value
          setAnswers(newArrayState)
        }}
      />
    </label>
  )
}
