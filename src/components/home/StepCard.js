import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Card from "../shared/Card"

const CardWrapper = styled.div`
  img {
    display: block;
    width: 5rem;
    height: auto;
    margin: 0 auto;
  }

  h4 {
    font-size: 1.2rem;
    width: 40%;
    min-height: 3.5rem;
    margin: 2rem 30% 0;
    text-align: center;
  }

  p {
    margin: 0 2rem;
    text-align: justify;
  }

  @media (max-width: 1200px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 770px) {
    h4 {
      width: 100%;
      margin: 2rem 0 0;
    }
  }
`

const StepCard = props => {
  return (
    <Card
      animate="slide-up"
      duration={500}
      delay={props.delay}
      easing="ease"
      className={props.className}
    >
      <CardWrapper>
        <img src={props.src} alt="Each step in the process" />
        <h4>{props.header}</h4>
        <p>{props.text}</p>
      </CardWrapper>
    </Card>
  )
}

StepCard.propTypes = {
  delay: PropTypes.number,
  src: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default StepCard
