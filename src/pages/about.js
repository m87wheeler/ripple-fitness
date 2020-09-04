import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import AboutSection from "../components/about/AboutSection"
import TheTeam from "../components/about/TheTeam"
import Card from "../components/shared/Card"

const About = ({ data }) => {
  return (
    <Layout>
      <AboutSection text={data.contentfulPageIntroduction.textContent.json} />
      <Card
        white
        animate="slide-up"
        duration={500}
        delay={0}
        easing="ease"
        style={{ width: "100%" }}
      >
        <TheTeam coachDataArray={data.allContentfulCoachProfile.edges} />
      </Card>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    contentfulPageIntroduction(title: { eq: "About" }) {
      textContent {
        json
      }
    }
    allContentfulCoachProfile {
      edges {
        node {
          contentful_id
          coachName
          coachPosition
          coachBio
          coachPhoto {
            file {
              url
            }
          }
        }
      }
    }
  }
`
