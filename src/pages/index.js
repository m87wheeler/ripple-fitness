import React from "react"
import { graphql } from "gatsby"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout/Layout"
// import SEO from "../components/seo"
import LandingAnimation from "../components/home/LandingAnimation"
import StepCard from "../components/home/StepCard"
import ResponsiveBox from "../components/shared/ResponsiveBox"
import ContentBox from "../components/shared/ContentBox"

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
  console.log(data)

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
              delay={i * 50}
              src={node.node.icon.file.url}
              header={node.node.title}
              text={node.node.shortDescription}
            />
          ))}
        </ProcessCardsWrapper>
      </LandingWrapper>
      {data.allContentfulHomepageContainer.edges.map(edge => {
        return (
          <ResponsiveBox
            key={edge.node.contentful_id}
            shift={edge.node.layoutShift}
            hue={edge.node.hue}
            src={edge.node.backgroundImage.file.url}
          >
            <ContentBox
              hue={edge.node.hue}
              subtitle={edge.node.subtitle}
              title={edge.node.title}
              content={edge.node.textContent.json}
              buttonText={edge.node.buttonText}
              linkTo={edge.node.linkTo}
            />
          </ResponsiveBox>
        )
      })}
      <ResponsiveBox
        shift="center"
        hue={data.allContentfulHomepageFaqContainer.edges[0].node.hue}
        src={
          data.allContentfulHomepageFaqContainer.edges[0].node.backgroundImage
            .file.url
        }
      >
        <ContentBox
          hue={data.allContentfulHomepageFaqContainer.edges[0].node.hue}
          subtitle={
            data.allContentfulHomepageFaqContainer.edges[0].node.subtitle
          }
          title={data.allContentfulHomepageFaqContainer.edges[0].node.title}
          data={data.allContentfulFrequentlyAskedQuestion.edges}
          buttonText="See All FAQ"
          linkTo="faq"
        />
      </ResponsiveBox>
    </Layout>
  )
}

export default IndexPage

// export const query = graphql``

export const query = graphql`
  query {
    allContentfulProgramSection(sort: { fields: order }) {
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
    allContentfulHomepageContainer(sort: { fields: order }) {
      edges {
        node {
          contentful_id
          order
          title
          subtitle
          centeredTitles
          backgroundImage {
            file {
              url
            }
          }
          textContent {
            json
          }
          buttonText
          linkTo
          hue
          layoutShift
        }
      }
    }
    allContentfulHomepageFaqContainer {
      edges {
        node {
          title
          subtitle
          backgroundImage {
            file {
              url
            }
          }
          hue
        }
      }
    }
    allContentfulFrequentlyAskedQuestion(
      filter: { showOnHomepage: { eq: true } }
    ) {
      edges {
        node {
          contentful_id
          showOnHomepage
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
