import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { motion } from "framer-motion"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
      className="flex-centered"
    >
      <h1>Welcome to the Trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you score 100%?</p>
      <Link className="unstyled-link" to="/take-quiz/">
        <button>BEGIN</button>
      </Link>
    </motion.section>
  </Layout>
)

export default IndexPage
