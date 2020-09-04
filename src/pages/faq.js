import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout/Layout"
import PageHeader from "../components/shared/PageHeader"
import Accordion from "../components/faq/Accordion"
// import Button from "../components/shared/Button"

const Header = styled(PageHeader)`
  text-align: center;
`

const AccordionContainer = styled.div`
  width: 60%;
  height: auto;
  margin: 3rem auto;

  @media (max-width: 980px) {
    width: 90%;
  }
`

const ButtonContainer = styled.div`
  text-align: center;
`

const FAQ = ({ data }) => {
  return (
    <Layout>
      <Header primary uppercase title="FAQ" />
      <AccordionContainer>
        <Accordion data={data.allContentfulFrequentlyAskedQuestion.edges} />
      </AccordionContainer>
      <ButtonContainer>
        {/* <Button primary shadow to="/contact">
          Contact Us
        </Button> */}
      </ButtonContainer>
    </Layout>
  )
}

export default FAQ

export const query = graphql`
  query {
    allContentfulFrequentlyAskedQuestion {
      edges {
        node {
          contentful_id
          title
          question {
            question
          }
          answer {
            answer
          }
        }
      }
    }
  }
`
