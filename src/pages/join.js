import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout/Layout"
import PageHeader from "../components/shared/PageHeader"
import MembershipCard from "../components/join/MembershipCard"
import Button from "../components/shared/Button"

const Header = styled(PageHeader)`
  text-align: center;

  &:nth-of-type(2) {
    margin-bottom: 3rem;
  }
`
const CardContainer = styled.div`
  width: 90%;
  margin: 5rem 5%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;

  @media (max-width: 1300px) {
    display: flex;
    flex-flow: column nowrap;

    * {
      margin-left: auto;
      margin-right: auto;
    }
  }
`

const CardButton = styled(Button)`
  display: block;
  margin: 2rem auto 5rem;
`

const Join = ({ data }) => {
  return (
    <Layout>
      <Header primary uppercase title="Offers and Trials" />
      <CardContainer>
        {data.allContentfulOfferTrialCards.edges.map(node => (
          <MembershipCard
            title={node.node.title}
            cost={node.node.currentPrice}
            normalCost={node.node.regularPrice}
            duration={node.node.duration}
            info={node.node.details}
            expiry={node.node.expiry}
            buttonText="JOIN NOW"
            link="https://www.trainerize.com"
            focus={node.node.inFocus}
          />
        ))}
      </CardContainer>
      <Header primary uppercase title="Want to join us?" />
      <CardButton link={"https://www.trainerize.com"} external primary>
        JOIN RIPPLE
      </CardButton>
    </Layout>
  )
}

export default Join

export const query = graphql`
  query {
    allContentfulOfferTrialCards {
      edges {
        node {
          title
          duration
          regularPrice
          currentPrice
          details
          expiry
          inFocus
          contentful_id
        }
      }
    }
  }
`
