import React, { useState, useContext } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { GlobalContext } from "../layouts/rootLayout"
import { Context } from "../@types/context"

const decodeHtml = (html: string) => {
  var txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value
}

export const Answer = ({ question, index }) => {
  const { answers } = useContext(GlobalContext) as Context
  const [isToggled, setIsToggled] = useState(false)
  return (
    <section style={{ margin: "50px 0px" }}>
      <h3 className="pointer-cursor" onClick={() => setIsToggled(!isToggled)}>
        Question {index + 1}
      </h3>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p>{decodeHtml(question.question)}</p>
            <ul>
              <li>
                <small>
                  You chose
                  <strong> {answers[index]}</strong>
                </small>
              </li>
              <li>
                <small>
                  The correct answer was
                  <strong> {question.correct_answer}</strong>
                </small>
              </li>
              <li>
                <small>
                  You got it
                  <span>
                    {" "}
                    {answers[index] === question.correct_answer
                      ? "right!"
                      : "wrong."}
                  </span>
                </small>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
