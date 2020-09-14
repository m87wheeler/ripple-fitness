import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import DualTitle from "./DualTitle"
import Button from "./Button"

const ContentContainer = styled.article`
  font-family: "Roboto", sans-serif;
  color: ${props => (props.hue === "light" ? "#111" : "whitesmoke")};

  div {
    margin-bottom: 1rem;

    p {
      font-size: 1rem;
      line-height: 1.5em;
      padding-bottom: 1rem;
      text-align: justify;
    }
  }
`

const ContentBox = props => {
  return (
    <ContentContainer hue={props.hue}>
      <DualTitle subtitle={props.subtitle} title={props.title} />
      <div>{documentToReactComponents(props.content)}</div>
      <Button to="/" primary>
        {props.buttonText}
      </Button>
    </ContentContainer>
  )
}

ContentBox.propTypes = {
  hue: PropTypes.oneOf(["light", "dark"]).isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default ContentBox
