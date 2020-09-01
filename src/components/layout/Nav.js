import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Hamburger from "./Hamburger"
import Button from "../shared/Button"

const NavWrapper = styled.nav`
  width: 100%;
  height: 100%;
  padding: 1rem;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    li {
      a {
        width: auto;
        height: auto;
        color: ${props =>
          props.landingPage
            ? props.theme.colors.white
            : props.theme.colors.black};
        border-bottom: 0.1rem solid transparent;
        padding: 0.25rem 1rem;
        transition: all 0.3s ease-in-out;
        text-decoration: none;

        &:hover {
          border-bottom: ${props =>
            `0.1rem solid ${props.theme.colors.primary}`};
        }
      }

      .active {
        color: ${props => props.theme.colors.primary};
      }

      &:last-of-type {
        a {
          border-bottom: 0.1rem solid transparent;

          &:hover {
            border-bottom: 0.1rem solid transparent;
          }
        }
      }
    }
  }

  @media (max-width: 980px) {
    position: fixed;
    top: 0;
    left: 0;
    height: auto;

    ul {
      position: fixed;
      top: ${props => (props.navisopen ? "0" : "-150vh")};
      left: 0;
      width: 100%;
      height: 100vh;
      padding: 30% 0;
      display: flex;
      flex-flow: column nowrap;
      background: ${props => props.theme.colors.primary};
      z-index: -1;

      li {
        background: pink;
        width: 100%;
        height: 20%;
        display: table;

        a {
          display: table-cell;
          vertical-align: middle;
          background: seagreen;
          width: inherit;
          height: 100%;
          color: ${props => props.theme.colors.white};
          border-bottom: none;
          padding: 0;

          &:hover {
            background: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.white};
          }
        }

        .active {
          color: ${props => props.theme.colors.black};
        }

        &:last-of-type {
          a {
            background: transparent;
          }
        }
      }
    }
  }
`

const NavHamburger = styled(Hamburger)`
  visibility: hidden;
  top: -100vh;
  right: -100vw;

  @media (max-width: 980px) {
    position: absolute;
    top: 1rem;
    right: 1rem;
    visibility: visible;
  }
`

const Nav = props => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const navStatus = () => {
    setNavIsOpen(!navIsOpen)
  }

  return (
    <NavWrapper landingPage={props.landingPage}>
      <NavHamburger onClick={navStatus} navIsOpen={navIsOpen} />
      <ul navisopen={navIsOpen}>
        <li>
          <Link to="/program" activeClassName="active">
            The Program
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/faq" activeClassName="active">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="active">
            Contact
          </Link>
        </li>
        <li>
          <Button to="/join" primary outline>
            Free Trial
          </Button>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
