import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout/Layout"
// import SEO from "../components/seo"

const NotFoundContainer = styled.div`
  padding-top: 3rem;
  text-align: center;

  h1 {
    color: ${props => props.theme.colors.secondary};
  }

  p {
    color: ${props => props.theme.colors.black};

    a {
      color: ${props => props.theme.colors.primary};
    }
  }
`

const NotFoundPage = () => (
  <Layout>
    {/* <SEO title="404: Not found" /> */}
    <NotFoundContainer>
      <h1>NOT FOUND</h1>
      <p>
        This page doesn't exist yet. Why not <Link to="/">go back</Link>?
      </p>
    </NotFoundContainer>
  </Layout>
)

export default NotFoundPage
