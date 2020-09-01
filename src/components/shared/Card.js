import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const CardWrapper = styled.div`
  display: inline-block;
  color: ${props => props.theme.colors.white};
  background: ${props =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : props.white
      ? props.theme.colors.white
      : "transparent"};
  min-width: 10rem;
  min-height: 10rem;
`

const Card = props => {
  return (
    <CardWrapper
      className={props.className}
      primary={props.primary}
      secondary={props.secondary}
      white={props.white}
      data-sal={props.animate}
      data-sal-duration={props.duration}
      data-sal-delay={props.delay}
      data-sal-easing={props.easing}
      style={props.style}
    >
      {props.children}
    </CardWrapper>
  )
}

Card.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  white: PropTypes.bool,
  animate: PropTypes.oneOf(["slide-up"]),
  duration: PropTypes.number,
  delay: PropTypes.string,
  easing: PropTypes.oneOf(["ease"]),
}

export default Card
