import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const HeaderWrapper = styled.h2`
  font-size: 3rem;
  color: ${props =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : props.white
      ? props.theme.colors.white
      : props.theme.colors.black};
  text-transform: ${props => (props.uppercase ? "uppercase" : "none")};
  letter-spacing: ${props => props.theme.spacing.medium};
`

const PageHeader = props => {
  return (
    <HeaderWrapper
      className={props.className}
      primary={props.primary}
      secondary={props.secondary}
      uppercase={props.uppercase}
      white={props.white}
    >
      {props.title}
    </HeaderWrapper>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  uppercase: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  white: PropTypes.bool,
}

export default PageHeader
