import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const LayoutGrid = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60vh auto;
  background: ${props =>
    props.hue === "light" ? "white" : props.hue === "dark" ? "black" : "white"};
  overflow: hidden;
  z-index: 0;

  @media (min-width: 700px) {
    height: 100vh;
    grid-template-columns: ${props =>
      props.shift === "center" ? "10vw 80vw 10vw" : "1fr 1fr"};
    grid-template-rows: 100%;
  }
`

const FadeGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  background: transparent;
  z-index: 2;

  @media (min-width: 700px) {
    transform: ${props =>
      props.shift === "left" ? "rotate(0)" : "rotate(180deg)"};
    background: none;
    background: transparent;
    background: ${props =>
      props.hue === "light"
        ? `linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.8295693277310925) 10%,
        rgba(0, 212, 255, 0) 100%
      )`
        : props.hue === "dark"
        ? `linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.8295693277310925) 50%,
        rgba(0, 212, 255, 0) 100%
      )`
        : "transparent"};
  }
`

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  background: ${props => (props.hue === "light" ? "#fff" : "#000")};
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    left: 0%;
    top: 0;
    width: 100%;
    height: 100%;
    filter: saturate(0);
    background-image: ${props => `url(${props.src})`};
    background-size: cover;
    background-position: center;
  }

  @media (min-width: 700px) {
    height: 100%;
  }
`

const BodyContainer = styled.div`
  position: relative;
  width: calc(100% - 2rem);
  min-height: 10rem;
  height: 100%;
  padding: 1rem;
  grid-row: 2 / 3;
  z-index: 3;

  @media (min-width: 700px) {
    width: auto;
    height: auto;
    padding: 0;
    grid-column: ${props =>
      props.shift === "left"
        ? "1 / 2"
        : props.shift === "right"
        ? "2 / 3"
        : "2 / 3"};
    grid-row: auto;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  margin-top: -7rem;
  width: 100%;
  white-space: wrap;

  @media (min-width: 700px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: auto;
    height: auto;
    margin: 0;
    min-width: 18rem;
    min-height: 10rem;
  }
`

const ResponsiveBox = props => {
  console.log(props.hue, props.shift)
  return (
    <LayoutGrid shift={props.shift} hue={props.hue}>
      <FadeGradient shift={props.shift} hue={props.hue} />
      <ImageContainer src={props.src} hue={props.hue} />
      <BodyContainer shift={props.shift}>
        <ContentWrapper>{props.children}</ContentWrapper>
      </BodyContainer>
    </LayoutGrid>
  )
}

ResponsiveBox.defaultProps = {
  shift: "left",
  hue: "none",
}

ResponsiveBox.propTypes = {
  shift: PropTypes.oneOf(["left", "right", "center"]),
  src: PropTypes.string.isRequired,
  hue: PropTypes.oneOf(["light", "dark", "none"]).isRequired,
}

export default ResponsiveBox
