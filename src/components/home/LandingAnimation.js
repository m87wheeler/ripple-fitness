import React from "react"
import styled, { keyframes } from "styled-components"

// small changes
const flyRightUp = keyframes`
    0% {
        left: -100vw;
        top: calc(50% - 14rem);
    } 
    15% {
        left: 50%;
        top: calc(50% - 14rem);
    }
    75% {
        left: 50%;
        top: calc(50% - 14rem);
    }
    100% {
        left: 50%;
        top: -100vh;
    }
`

// big results
const flyLeftDown = keyframes`
    0% {
        bottom: calc(50% - 14rem);
        right: -100vw;
    } 
    15% {
        bottom: calc(50% - 14rem);
        right: 50%;
    }
    75% {
        bottom: calc(50% - 14rem);
        right: 50%;
    }
    100% {  
        bottom: -100vh;
        right: 50%;
    }
`

// yours
const scaleIn = keyframes`
    from {
        transform: translateY(-50%) scale(0);
    } to {
        transform: translateY(-50%) scale(1);
    }
`

// create
const scaleInNudgeLeft = keyframes`
  0% {
    transform: translateY(-50%) translateX(50%) scale(0);
  }
  15% {
    transform: translateY(-50%) translateX(50%) scale(1);
  }
  74% {
    
    transform: translateY(-50%) translateX(50%) scale(1);
  }
  75% {
    right: calc(50%);
    transform: translateY(-50%) translateX(50%) scale(1);
  }
  90% {
    right: calc(50% - 1rem);
    transform: translateY(-50%) translateX(0) scale(1);
  }
  100% {
    right: calc(50% - 1rem);
    transform: translateY(-50%) translateX(0) scale(1);
  }
`

const AnimationWrapper = styled.div`
  overflow: hidden;

  h2,
  p {
    position: absolute;
    font-weight: 700;
    font-family: ${props => props.theme.fonts.serif};
  }

  h2,
  p:last-of-type {
    font-size: 8rem;
  }

  h2:first-of-type {
    color: ${props => props.theme.colors.white};
    top: calc(50% - 10rem);
    left: -100vw;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
    animation: ${flyRightUp} 3.5s 1 forwards;
  }

  h2:last-of-type {
    color: ${props => props.theme.colors.white};
    bottom: calc(50% - 10rem);
    right: -100vw;
    transform: translateX(50%);
    width: 100%;
    text-align: center;
    animation: ${flyLeftDown} 3s 1 forwards;
    animation-delay: 0.5s;
  }

  p:first-of-type {
    color: ${props => props.theme.colors.primary};
    font-size: 8rem;
    top: 50%;
    right: 50%;
    transform: translateY(-50%) translateX(50%) scale(0);
    animation: ${scaleInNudgeLeft} 3s 1 forwards;
    animation-delay: 0.5s;
  }

  p:last-of-type {
    color: ${props => props.theme.colors.white};
    top: 50%;
    left: calc(50% + 1rem);
    transform: translateY(-50%) scale(0);
    animation: ${scaleIn} 0.5s 1 forwards;
    animation-delay: 3s;
  }

  @media (max-width: 1200px) {
    h2,
    p:last-of-type {
      font-size: 4rem;
    }

    h2:first-of-type {
      top: calc(50% - 5rem);
    }

    h2:last-of-type {
      bottom: calc(50% - 5rem);
    }

    p:first-of-type {
      font-size: 5.5rem;
    }

    p:last-of-type {
      font-size: 5.5rem;
    }
  }

  @media (max-width: 770px) {
    h2:first-of-type {
      top: calc(50% - 14rem);
      left: 0;
      transform: none;
      animation: none;
      color: ${props => props.theme.colors.primary};
      font-size: 6rem;
    }

    h2:last-of-type {
      top: 50%;
      left: 0;
      transform: none;
      animation: none;
      font-size: 8rem;
    }

    p:first-of-type {
      display: none;
    }

    p:last-of-type {
      display: none;
    }
  }

  @media (max-width: 640px) {
    h2:first-of-type {
      top: calc(50% - 3rem);
      font-size: 2rem;
    }

    h2:last-of-type {
      top: 50%;
      left: 0;
      font-size: 3rem;
    }
  }
`

const LandingAnimation = props => {
  return (
    <AnimationWrapper className={props.className} style={props.style}>
      <h2>SMALL CHANGES</h2>
      <p>CREATE</p>
      <h2>BIG RESULTS</h2>
      <p>YOURS</p>
    </AnimationWrapper>
  )
}

export default LandingAnimation
