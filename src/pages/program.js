import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout/Layout"
import PageHeader from "../components/shared/PageHeader"
import ProgramCard from "../components/program/ProgramCard"

const ProgramWrapper = styled.section`
  width: 80%;
  margin: 0 10% 3rem;
`

const Header = styled(PageHeader)`
  grid-area: title;
  text-align: center;
`

const IntroText = styled.p`
  grid-area: intro;
  width: 50%;
  margin: 2rem auto 3rem;
  line-height: 1.5rem;
  text-align: center;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 800px) {
    width: 100%;
    text-align: justify;
  }
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 1200px) {
    display: flex;
    flex-flow: column nowrap;
  }
`

const Program = ({ data }) => {
  return (
    <Layout>
      <ProgramWrapper>
        <Header primary uppercase title="The Program" />
        <IntroText>
          Dynamic text goes here
          {
            data.allContentfulPageIntroduction.edges[0].node
              .childContentfulPageIntroductionTextContentRichTextNode
              .textContent
          }
        </IntroText>
        <CardContainer>
          {
            /* cards need to be sorted using order */
            data.allContentfulProgramSection.edges.map((card, i) => (
              <ProgramCard
                key={card.node.title}
                header={card.node.title}
                src={card.node.icon.file.url}
                text={card.node.shortDescription}
              >
                {
                  card.node
                    .childContentfulProgramSectionSectionDetailsRichTextNode
                    .sectionDetails
                }
              </ProgramCard>
            ))
          }
        </CardContainer>
      </ProgramWrapper>
    </Layout>
  )
}

export default Program

export const query = graphql`
  query {
    allContentfulProgramSection {
      edges {
        node {
          title
          shortDescription
          icon {
            file {
              url
            }
          }
          childContentfulProgramSectionSectionDetailsRichTextNode {
            sectionDetails
          }
        }
      }
    }
    allContentfulPageIntroduction {
      edges {
        node {
          childContentfulPageIntroductionTextContentRichTextNode {
            textContent
          }
        }
      }
    }
  }
`
