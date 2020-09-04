import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Card from "../shared/Card"
import Button from "../shared/Button"

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-flow: column nowrap;
  background: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.material.shadow};

  img {
    display: block;
    width: 5rem;
    height: auto;
    margin: 0 auto;
  }

  h4 {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    width: 40%;
    min-height: 3.5rem;
    margin: 2rem 30% 1rem;
    text-align: center;
  }

  p {
    margin: 0 2rem 2rem;
    text-align: justify;
  }

  @media (max-width: 770px) {
    padding: 4rem 0 0.75rem;
  }
`

const MoreButton = styled(Button)`
  width: auto;
  margin: 1rem auto 2rem;
`

const SeeMore = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5rem 2rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  border-top: ${props => `.5rem solid ${props.theme.colors.primary}`};
  border-bottom: ${props => `.5rem solid ${props.theme.colors.primary}`};
  transform-origin: center;
  transform: ${props => (props.visible ? "scale(1)" : "scale(0)")};
  transition: transform 0.2s ease;
  overflow-x: hidden;
  overflow-y: scroll;

  @media (max-width: 770px) {
    padding: 5rem 0;
  }
`

const CloseContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  z-index: 10;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2rem;
    height: 0.25rem;
    background: ${props => props.theme.colors.secondary};
    transform-origin: center;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2rem;
    height: 0.25rem;
    background: ${props => props.theme.colors.secondary};
    transform-origin: center;
    transform: translateX(-50%) translateY(-50%) rotate(-45deg);
    transition: background 0.3s ease-in-out;
  }

  &:hover {
    &::before,
    &::after {
      background: ${props => props.theme.colors.primary};
    }
  }
`

const ProgramCard = props => {
  const [seeMore, setSeeMore] = useState(false)

  const handleClick = () => {
    setSeeMore(true)
  }

  const exitMore = () => {
    setSeeMore(false)
  }

  return (
    <Card
      animate="slide-up"
      duration={500}
      delay={props.delay || 0}
      easing="ease"
      className={props.className}
    >
      <CardWrapper>
        <img src={props.src} alt="Step Icon" />
        <h4>{props.header}</h4>
        <p>{props.text}</p>
        <MoreButton outline action={handleClick}>
          SEE MORE
        </MoreButton>
        <SeeMore visible={seeMore}>
          <CloseContainer onClick={exitMore} onKeyDown={exitMore} />
          {documentToReactComponents(props.richText)}
          <Button to="/join" primary style={{ marginTop: "2rem" }}>
            JOIN
          </Button>
        </SeeMore>
      </CardWrapper>
    </Card>
  )
}

ProgramCard.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string,
  delay: PropTypes.string,
}

export default ProgramCard
