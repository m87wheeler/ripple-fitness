import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const ButtonWrapper = styled.button`
  background: ${props =>
    props.outline
      ? "transparent"
      : props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : null};

  color: ${props =>
    props.outline
      ? props.primary
        ? props.theme.colors.primary
        : props.secondary
        ? props.theme.colors.secondary
        : props.theme.colors.white
      : props.theme.colors.white};

  border: ${props =>
    props.primary
      ? `3px solid ${props.theme.colors.primary}`
      : props.secondary
      ? `3px solid ${props.theme.colors.secondary}`
      : `3px solid ${props.theme.colors.white}`};
  /* box-shadow: ${props => (props.shadow ? "10px 10px 3px" : "none")}; */
  opacity: 1;
  padding: 0.5rem 2rem;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: ${props => props.theme.spacing.small};
  font-family: ${props => props.theme.fonts.serif};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${props =>
      props.outline
        ? props.primary
          ? props.theme.colors.primary
          : props.secondary
          ? props.theme.colors.secondary
          : null
        : null};
    color: ${props => (props.outline ? props.theme.colors.white : null)};
    opacity: ${props => (props.outline ? "1" : ".9")};
  }
`

const AnchorWrapper = styled.a`
  max-width: 12rem;
  background: ${props =>
    props.outline
      ? "transparent"
      : props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : null};

  color: ${props =>
    props.outline
      ? props.primary
        ? props.theme.colors.primary
        : props.secondary
        ? props.theme.colors.secondary
        : props.theme.colors.white
      : props.theme.colors.white};

  border: ${props =>
    props.primary
      ? `3px solid ${props.theme.colors.primary}`
      : props.secondary
      ? `3px solid ${props.theme.colors.secondary}`
      : `3px solid ${props.theme.colors.white}`};
  /* box-shadow: ${props => (props.shadow ? "10px 10px 3px" : "none")}; */
  opacity: 1;
  padding: 0.5rem 2rem;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: ${props => props.theme.spacing.small};
  font-family: ${props => props.theme.fonts.serif};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    background: ${props =>
      props.outline
        ? props.primary
          ? props.theme.colors.primary
          : props.secondary
          ? props.theme.colors.secondary
          : null
        : null};
    color: ${props => (props.outline ? props.theme.colors.white : "inherit")};
    opacity: ${props => (props.outline ? "1" : ".9")};
  }
`

const Button = props => {
  if (props.to) {
    return (
      <Link to={props.to} className={props.className}>
        <ButtonWrapper
          primary={props.primary}
          secondary={props.secondary}
          outline={props.outline}
          shadow={props.shadow}
          style={props.style}
        >
          {props.children}
        </ButtonWrapper>
      </Link>
    )
  } else if (props.link) {
    return (
      <AnchorWrapper
        className={props.className}
        primary={props.primary}
        secondary={props.secondary}
        outline={props.outline}
        shadow={props.shadow}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        style={props.style}
      >
        {props.children}
      </AnchorWrapper>
    )
  } else {
    return (
      <ButtonWrapper
        className={props.className}
        primary={props.primary}
        secondary={props.secondary}
        outline={props.outline}
        shadow={props.shadow}
        onClick={props.onClick}
        style={props.style}
      >
        {props.children}
      </ButtonWrapper>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
}

export default Button
