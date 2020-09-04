import React from "react"
import styled from "styled-components"

import rippleLogo from "../../assets/icons/main-logo.png"
import trainerizeLogo from "../../assets/icons/trainerize-logo-grey.png"
import mwwddLogo from "../../assets/icons/logo192.png"

const FooterWrapper = styled.footer`
  /* display: flex;
  flex-flow: column nowrap; */
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  width: 100%;
  height: auto;
  padding: 2rem 5rem;
  background: ${props => props.theme.colors.secondary};
  overflow: hidden;

  @media (max-width: 1220px) {
    flex-flow: column nowrap;
    align-items: center;
  }
`

const LogoContainer = styled.a`
  text-align: center;
  margin: 0 auto;

  img {
    width: 4rem;
    border: 3px solid white;
    border-radius: 100%;
    background: #fff;
    filter: saturate(0) brightness(0.9);
  }

  p {
    font-family: ${props => props.theme.fonts.developer};
    font-size: 0.8rem;
    color: #fff;
    width: 20rem;
    margin: 0.5rem auto 1rem;

    a {
      color: ${props => props.theme.colors.primary};
    }
  }

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 1220px) {
    margin: 0;
  }
`

const Footer = props => {
  return (
    <FooterWrapper>
      <LogoContainer>
        <img src={rippleLogo} alt="Ripple Fitness Logo" />
        <p>&copy; 2020 Ripple Fitness</p>
      </LogoContainer>
      <LogoContainer
        href="https://www.trainerize.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src={trainerizeLogo}
          alt="Trainerize Logo"
          style={{ border: "none", background: "none" }}
        />
        <p>Powered by Trainerize</p>
      </LogoContainer>
      <LogoContainer
        href="https://www.martinwheelerweb.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={mwwddLogo} alt="Martin Wheeler Web Development & Design" />
        <p>Martin Wheeler Web Development &amp; Design</p>
      </LogoContainer>
    </FooterWrapper>
  )
}

export default Footer
