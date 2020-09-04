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

  @media (max-width: 1600px) {
    width: 80%;
    margin: 5rem 10%;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  @media (max-width: 1300px) {
    width: 90%;
    margin: 5rem 5%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;

    * {
      margin-left: auto;
      margin-right: auto;
    }
  }
`

const ButtonContainer = styled.div`
  display: block;
  margin: 2rem auto 5rem;
  text-align: center;
`

const Join = ({ data }) => {
  return (
    <Layout>
      <Header primary uppercase title="Offers and Trials" />
      <CardContainer>
        {data.allContentfulOfferTrialCards.edges.map(node => (
          <MembershipCard
            key={node.node.contentful_id}
            title={node.node.title}
            cost={node.node.currentPrice}
            normalCost={node.node.regularPrice}
            duration={node.node.duration}
            info={node.node.details}
            expiry={node.node.expiry}
            buttonText="JOIN NOW"
            link={node.node.url}
            focus={node.node.inFocus}
          />
        ))}
      </CardContainer>
      <Header primary uppercase title="Want to join us?" />
      <ButtonContainer>
        <Button href={data.contentfulDefaultButtonLinks.url} primary shadow>
          JOIN RIPPLE
        </Button>
      </ButtonContainer>
    </Layout>
  )
}

export default Join

export const query = graphql`
  query {
    allContentfulOfferTrialCards(limit: 3) {
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
          url
        }
      }
    }
    contentfulDefaultButtonLinks(buttonName: { eq: "Join" }) {
      url
    }
  }
`
