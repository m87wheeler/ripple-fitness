import React from "react"
import styled, { createGlobalStyle } from "styled-components"
// import "bootstrap/dist/css/bootstrap.min.css"

import Theme from "./Theme"
import Header from "./Header"
import Footer from "./Footer"

const GlobalReset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

const GlobalStyles = createGlobalStyle`
    body {
        font-family: ${props => props.theme.fonts.serif};
        font-size: 16px;
        color: var(--black-text);
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: ${props => props.theme.fonts.serif};
    }

    p {
      font-family: ${props => props.theme.fonts.sans};
    }

    a {
        text-decoration: none;
    }
`

const StickyHeader = styled(Header)`
  position: fixed;
  top: 0%;
  left: 0;
  z-index: 10;
`

const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  padding-top: ${props =>
    props.landingPage ? "0" : props.theme.gutters.header};
`

const ChildrenWrapper = styled.main`
  position: relative;
  height: 100%;
  width: 100%;
`

const FooterPositioned = styled(Footer)`
  position: relative;
  z-index: 10;
`

const Layout = props => {
  return (
    <React.Fragment>
      <Theme>
        <LayoutWrapper landingPage={props.landingPage}>
          <GlobalReset />
          <GlobalStyles />
          <StickyHeader landingPage={props.landingPage} />
          <ChildrenWrapper>{props.children}</ChildrenWrapper>
          <FooterPositioned />
        </LayoutWrapper>
      </Theme>
    </React.Fragment>
  )
}

export default Layout
