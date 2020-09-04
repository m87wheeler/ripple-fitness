import React from "react"
import { graphql } from "gatsby"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout/Layout"
import LandingAnimation from "../components/home/LandingAnimation"
import StepCard from "../components/home/StepCard"
import AboutSection from "../components/about/AboutSection"
import Button from "../components/shared/Button"
// import VideoPlayer from "../components/shared/VideoPlayer"

import landingImg from "../assets/images/landing-image.jpg"

const slowGrowImage = keyframes`
   from {
     transform: scale(1);
   } to {
     transform: scale(1.025);
   }
`

const LandingWrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 200vh;

  @media (max-width: 1200px) {
    height: auto;
  }
`

const LandingImageWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${`url(${landingImg})`};
    background-position: center;
    background-size: cover;
    filter: saturate(0) brightness(0.3);
    animation: ${slowGrowImage} 7s 1 forwards;
  }
`

const LandingAnimationPositioned = styled(LandingAnimation)`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100vh;

  @media (max-width: 1200px) {
    position: relative;
    top: -100vh;
  }
`

const ProcessCardsWrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  padding: 3rem 10%;

  @media (max-width: 1200px) {
    top: -100vh;
    flex-flow: column nowrap;
    width: 60%;
    left: 20%;
    padding: 3rem;
  }

  @media (max-width: 770px) {
    width: 80%;
    left: 10%;
  }

  @media (max-width: 600px) {
    width: 100%;
    left: 0;
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout landingPage>
      <LandingWrapper>
        <LandingImageWrapper />
        <LandingAnimationPositioned />
        <ProcessCardsWrapper>
          {data.allContentfulProgramSection.edges.map((node, i) => (
            <StepCard
              primary
              key={node.node.contentful_id}
              delay={i * 300}
              src={node.node.icon.file.url}
              header={node.node.title}
              text={node.node.shortDescription}
            />
          ))}
        </ProcessCardsWrapper>
      </LandingWrapper>
      <AboutSection text={data.contentfulPageIntroduction.textContent.json}>
        <div style={{ textAlign: "center" }}>
          <Button primary to="/about" style={{ display: "inline-block" }}>
            Learn More
          </Button>
        </div>
      </AboutSection>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allContentfulProgramSection {
      edges {
        node {
          contentful_id
          title
          shortDescription
          icon {
            file {
              url
            }
          }
          sectionDetails {
            json
          }
        }
      }
    }
    contentfulPageIntroduction(title: { eq: "About" }) {
      textContent {
        json
      }
    }
  }
`
