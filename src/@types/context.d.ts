export type QuestionType = {
  category: string
  type: boolean
  difficult: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

type Dispatch<A> = (value: A) => void
type SetStateAction<S> = S | ((prevState: S) => S)
export type Context = {
  data: QuestionType[]
  setData: Dispatch<SetStateAction<QuestionType[]>>
  answers: string[]
  setAnswers: Dispatch<SetStateAction<string[]>>
  isQuizFinished: boolean
  setIsQuizFinished: Dispatch<SetStateAction<boolean>>
  nulledArray: null[]
}
