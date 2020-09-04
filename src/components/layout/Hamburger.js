import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const HamburgerWrapper = styled.div`
  position: absolute;
  width: 2.5rem;
  height: 2rem;
  cursor: pointer;

  span {
    position: absolute;
    left: 0;
    width: inherit;
    height: 0.25rem;
    background: ${props =>
      props.navIsOpen ? props.theme.colors.white : props.theme.colors.primary};
    transform-origin: center;
    transition: all 0.2s ease-in-out;
  }

  span:first-of-type {
    top: ${props => (props.navIsOpen ? "50%" : "0")};
    transform: ${props =>
      props.navIsOpen ? "translateY(-50%) rotate(-45deg)" : "none"};
  }

  span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    opacity: ${props => (props.navIsOpen ? "0" : "1")};
  }

  span:last-of-type {
    bottom: ${props => (props.navIsOpen ? "50%" : "0")};
    transform: ${props =>
      props.navIsOpen ? "translateY(50%) rotate(45deg)" : "none"};
  }
`

const Hamburger = props => {
  return (
    <HamburgerWrapper
      className={props.className}
      onClick={props.onClick}
      onKeyDown={props.onClick}
      navIsOpen={props.navIsOpen}
    >
      <span />
      <span />
      <span />
    </HamburgerWrapper>
  )
}

Hamburger.propTypes = {
  navIsOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
}

export default Hamburger
