import React from "react"
import styled from "styled-components"

import PageHeader from "../shared/PageHeader"

import wordLogo from "../../assets/icons/word-logo.png"

const Header = styled(PageHeader)`
  text-align: center;
  padding-bottom: 1rem;
`

const AboutText = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.disabled};
  padding: 5rem 0;

  h4 {
    font-size: 2.5rem;
    letter-spacing: ${props => props.theme.spacing.medium};
    text-align: center;
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 1.5rem;
  }

  img {
    display: block;
    width: 20rem;
    margin: 0 auto;
  }

  p {
    width: 40%;
    margin: 2rem auto;
    font-size: 1.25rem;
    line-height: 1.5em;
    color: ${props => props.theme.colors.secondary};
  }
`

const Text = styled.div`
  width: 60%;
  margin: 3rem auto;

  @media (max-width: 800px) {
    width: 90%;
  }
`

const AboutSection = props => {
  return (
    <AboutText>
      <Header secondary uppercase title="About" />
      <img src={wordLogo} alt="Ripple Word Logo" />
      <Text>{props.text}</Text>
    </AboutText>
  )
}

export default AboutSection
