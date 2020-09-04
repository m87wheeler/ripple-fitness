import React from "react"
import styled, { createGlobalStyle } from "styled-components"

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
        scroll-behavior: smooth;
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
  min-height: ${props => `calc(100vh - ${props.theme.gutters.header})`};
  display: flex;
  flex-flow: column nowrap;
  margin-top: ${props =>
    props.landingPage ? "0" : props.theme.gutters.header};
`

const ChildrenWrapper = styled.main`
  height: auto;
  width: 100%;
  flex-grow: 1;
`

const FooterPositioned = styled(Footer)`
  position: relative;
  align-self: flex-end;
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
