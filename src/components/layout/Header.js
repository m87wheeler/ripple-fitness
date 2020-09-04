import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Nav from "./Nav"

import mainLogo from "../../assets/icons/main-logo.png"

const HeaderWrapper = styled.header`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 980px) {
    display: block;
    width: 100%;
    text-align: center;
  }
`

const LogoContainer = styled.div`
  padding: 1rem;

  img {
    height: 7rem;
  }

  @media (max-width: 980px) {
    img {
      background: white;
      padding: 5px;
      border-radius: 100%;
    }
  }
`

const Header = props => {
  return (
    <HeaderWrapper className={props.className}>
      <LogoContainer>
        <Link to="/">
          <img src={mainLogo} alt="ripple logo" />
        </Link>
      </LogoContainer>
      <Nav landingPage={props.landingPage} />
    </HeaderWrapper>
  )
}

export default Header
