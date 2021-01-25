import React, { useState, useEffect, useContext } from "react"
import { Link } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { Quiz } from "../components/quiz/quiz"
import { GlobalContext } from "../layouts/rootLayout"
import { Context } from "../@types/context"
const TakeQuiz = () => {
  const Context = useContext(GlobalContext) as Context
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
      )
      Context.setData(await res.json())
      setIsLoading(false)
    }
    getData()
  }, [])
  return (
    <Layout>
      <SEO title="Quiz" />
      <h1>Quiz</h1>
      {isLoading ? <div>Loading...</div> : <Quiz data={Context.data} />}
    </Layout>
  )
}

export default TakeQuiz
