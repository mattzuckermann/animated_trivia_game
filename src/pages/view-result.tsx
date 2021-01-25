import React, { useContext } from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { GlobalContext } from "../layouts/rootLayout"
import { Context } from "../@types/context"
import { Result } from "../components/result"
const ViewResult = () => {
  const Context = useContext(GlobalContext) as Context
  return (
    <Layout>
      <SEO title="Result" />
      {Context?.isQuizFinished ? (
        <Result data={Context.data} />
      ) : (
        <>
          <h1>Quiz has either not been finished or not submitted</h1>
          <Link to="/take-quiz">Back to Quiz</Link>
        </>
      )}
    </Layout>
  )
}

export default ViewResult
