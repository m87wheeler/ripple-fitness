import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Titles = styled.div`
  font-family: "Roboto", sans-serif;
  text-align: ${props => (props.centered ? "center" : "left")};

  h3 {
    display: inline-block;
    font-size: 1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: ${props => `5px solid ${props.theme.colors.primary}`};
    padding-bottom: 3px;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`

const DualTitle = props => {
  return (
    <Titles centered={props.centered}>
      <h3>{props.subtitle}</h3>
      <h1>{props.title}</h1>
    </Titles>
  )
}

DualTitle.propTypes = {
  centered: PropTypes.bool,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default DualTitle
