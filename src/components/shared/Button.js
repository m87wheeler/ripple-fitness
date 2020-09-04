import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const InternalButton = styled(Link)`
  display: block;
`

const ActionButton = styled.div``

const ExternalButton = styled.a`
  text-decoration: none;
`

const ButtonWrapper = styled.button`
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 0.75rem 2rem;
  text-transform: uppercase;
  box-shadow: ${props => (props.shadow ? props.theme.material.shadow : "none")};

  background: ${props =>
    props.outline
      ? props.primary
        ? "transparent"
        : props.secondary
        ? "transparent"
        : "transparent"
      : props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : "transparent"};
  color: ${props =>
    props.outline
      ? props.primary
        ? props.theme.colors.primary
        : props.secondary
        ? props.theme.colors.secondary
        : props.theme.colors.white
      : props.primary
      ? props.theme.colors.white
      : props.secondary
      ? props.theme.colors.white
      : props.theme.colors.black};
  border: ${props =>
    props.outline
      ? props.primary
        ? `3px solid ${props.theme.colors.primary}`
        : props.secondary
        ? `3px solid ${props.theme.colors.secondary}`
        : `3px solid ${props.theme.colors.white}`
      : props.primary
      ? `3px solid ${props.theme.colors.primary}`
      : props.secondary
      ? `3px solid ${props.theme.colors.secondary}`
      : `3px solid ${props.theme.colors.black}`};
  transition: all 0.3s ease;

  &:hover {
    background: ${props =>
      props.outline
        ? props.primary
          ? props.theme.colors.primary
          : props.secondary
          ? props.theme.colors.secondary
          : props.theme.colors.white
        : props.primary
        ? props.theme.colors.white
        : props.secondary
        ? props.theme.colors.white
        : "black"};
    color: ${props =>
      props.outline
        ? props.primary
          ? props.theme.colors.white
          : props.secondary
          ? props.theme.colors.white
          : props.theme.colors.primary
        : props.primary
        ? props.theme.colors.primary
        : props.secondary
        ? props.theme.colors.secondary
        : props.theme.colors.white};
  }
`

const Button = props => {
  if (props.to) {
    // a button that links within the site
    return (
      <InternalButton to={props.to} className={props.className}>
        <ButtonWrapper
          className={props.className}
          primary={props.primary}
          secondary={props.secondary}
          outline={props.outline}
          style={props.style}
        >
          {props.children}
        </ButtonWrapper>
      </InternalButton>
    )
  } else if (props.action) {
    // a button that carries out an action
    return (
      <ActionButton className={props.className}>
        <ButtonWrapper
          className={props.className}
          onClick={props.action}
          onKeyDown={props.action}
          primary={props.primary}
          secondary={props.secondary}
          outline={props.outline}
          style={props.style}
        >
          {props.children}
        </ButtonWrapper>
      </ActionButton>
    )
  } else if (props.href) {
    // a button that links to an external page
    return (
      <ExternalButton
        href={props.href}
        target="_blank"
        rel="noreferrer noopen"
        className={props.className}
      >
        <ButtonWrapper
          className={props.className}
          primary={props.primary}
          secondary={props.secondary}
          outline={props.outline}
          shadow={props.shadow}
          style={props.style}
        >
          {props.children}
        </ButtonWrapper>
      </ExternalButton>
    )
  }
}

Button.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  outline: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Button
