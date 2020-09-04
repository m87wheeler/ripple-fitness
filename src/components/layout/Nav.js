import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
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
    right: ${props => (props.navIsOpen ? "0" : "-150vw")};
    height: 100vh;
    background: ${props => props.theme.colors.secondary};
    transition: right 0.3s ease-in-out;

    ul {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 70%;
      padding: 20% 0 10%;
      display: flex;
      flex-flow: column nowrap;
      z-index: 5;

      li {
        width: 100%;
        height: 20%;
        display: table;

        a {
          display: table-cell;
          vertical-align: middle;
          width: inherit;
          height: 100%;
          font-size: 1.5rem;
          color: ${props => props.theme.colors.white};
          border-bottom: none;
          padding: 0;

          &:hover {
            background: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.white};
            border: none;
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

const NavButton = styled(Button)`
  @media (max-width: 980px) {
    button {
      font-size: 1.5rem;
      font-weight: 400;
      border: ${props => `3px solid ${props.theme.colors.white}`};
      color: ${props => props.theme.colors.white};
    }
  }
`

const NavHamburger = styled(Hamburger)`
  display: none;
  top: -100vh;
  right: -100vw;

  @media (max-width: 980px) {
    display: block;
    position: fixed;
    top: 2rem;
    right: 1.5rem;
    z-index: 999;
  }
`

const SocialMedia = styled.div`
  display: none;

  @media (max-width: 980px) {
    width: 100%;
    height: calc(30% - 1rem);
    padding: 1rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
  }

  a {
    height: 3rem;

    img {
      height: inherit;
    }
  }
`

const Nav = ({ className, landingPage }) => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const handleClick = () => {
    console.log("click")
    setNavIsOpen(!navIsOpen)
  }

  return (
    <NavWrapper
      landingPage={landingPage}
      className={className}
      navIsOpen={navIsOpen}
    >
      <NavHamburger
        onClick={handleClick}
        onKeyDown={handleClick}
        navIsOpen={navIsOpen}
      />
      <ul>
        <li>
          <Link
            to="/program"
            activeClassName="active"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            The Program
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            activeClassName="active"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/faq"
            activeClassName="active"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            FAQ
          </Link>
        </li>
        {/* <li>
          <Link to="/contact" activeClassName="active" onClick={handleClick} onKeyDown={handleClick}>
            Contact
          </Link>
        </li> */}
        <li>
          <NavButton
            to="/join"
            primary
            outline
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            Free Trial
          </NavButton>
        </li>
      </ul>
      <StaticQuery
        query={graphql`
          query {
            allContentfulSocialMediaLinks {
              edges {
                node {
                  contentful_id
                  title
                  url
                  pngIcon {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <SocialMedia>
            {data.allContentfulSocialMediaLinks.edges.map(edge => (
              <a key={edge.node.contentful_id} href={edge.node.url}>
                <img
                  src={edge.node.pngIcon.file.url}
                  alt={`${edge.node.title} logo`}
                />
              </a>
            ))}
          </SocialMedia>
        )}
      />
    </NavWrapper>
  )
}

export default Nav
