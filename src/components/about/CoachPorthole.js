import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Card from "../shared/Card"

// import coachLrg from "../../assets/icons/coach-lrg.png"

const CoachCard = styled(Card)`
  display: flex;
  flex-flow: column nowrap;
  width: 25rem;
  margin: 1rem;
  text-align: center;

  h3 {
    color: ${props => props.theme.colors.primary};
    padding-top: 1rem;
  }
  h6 {
    color: ${props => props.theme.colors.secondary};
    padding-bottom: 1rem;
  }

  p {
    color: ${props => props.theme.colors.black};
  }
`

// const ImageWrapper = styled.div`
//   position: relative;
//   width: 15rem;
//   height: 15rem;
//   margin: -7.5rem auto 0;
//   background: ${props => props.theme.colors.disabled};
//   border-radius: 100%;
//   overflow: hidden;

//   img {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translateX(-50%) translateY(-50%);
//     width: 100%;
//   }
// `

const CoachPorthole = props => {
  return (
    <CoachCard
      animate={props.animate}
      duration={props.duration}
      delay={props.delay}
      easing={props.easing}
    >
      {/* <ImageWrapper>
        <img src={props.src || coachLrg} alt={"Ripple Coach"} />
      </ImageWrapper> */}
      <h3>{props.name}</h3>
      <h6>{props.position}</h6>
      <p>{props.bio}</p>
    </CoachCard>
  )
}

CoachPorthole.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  src: PropTypes.string,
}

export default CoachPorthole
