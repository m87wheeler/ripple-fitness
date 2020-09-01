import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import AboutSection from "../components/about/AboutSection"
import TheTeam from "../components/about/TheTeam"
import Card from "../components/shared/Card"

const About = ({ data }) => {
  const aboutIntro = data.allContentfulPageIntroduction.edges.find(
    node => node.node.title === "About"
  )

  return (
    <Layout>
      <AboutSection
        text={
          aboutIntro.node.childContentfulPageIntroductionTextContentRichTextNode
            .textContent
        }
      />
      <Card
        white
        animate="slide-up"
        duration={500}
        delay={0}
        easing="ease"
        style={{ width: "100%" }}
      >
        <TheTeam />
      </Card>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    allContentfulPageIntroduction {
      edges {
        node {
          title
          childContentfulPageIntroductionTextContentRichTextNode {
            textContent
          }
        }
      }
    }
  }
`
