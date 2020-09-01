import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  width: 100%;
  height: 10rem;
  background: ${props => props.theme.colors.secondary};
`

const Footer = props => {
  return <FooterWrapper>Footer</FooterWrapper>
}

export default Footer
