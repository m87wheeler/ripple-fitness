import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Button from "./Button"

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 60rem;
  min-height: 40rem;
  background: ${props => props.theme.colors.primary};
  opacity: ${props => (props.displayed ? "1" : "0")};
  transform: ${props =>
    props.displayed
      ? "translateX(-50%) translateY(-50%) scale(1)"
      : "translateX(-50%) translateY(-50%) scale(0)"};
  transition: all 0.3s ease-in;
  z-index: 20;

  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
`

const ModalTitleBlock = styled.div`
  padding: 3rem;
  background: ${props => props.theme.colors.secondary};
  display: grid;
  grid-template-rows: 50% 50%;

  h2 {
    font-size: 3.5rem;
    text-align: center;
    border-bottom: ${props => `3px solid ${props.theme.colors.primary}`};
    color: ${props => props.theme.colors.white};
  }

  h4 {
    font-size: 2rem;
    padding-top: 50%;
    transform: translateY(-50%);
    text-align: center;
  }
`

const ModalButton = styled(Button)``

const ModalInfoBlock = styled.div`
  padding: 3rem;
  background: ${props => props.theme.colors.white};
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  .promo-text {
    padding-top: 0.5rem 1rem 1rem;
    font-size: 1.5rem;
    line-height: 1.5em;
    color: ${props => props.theme.colors.black};
    text-align: justify;
  }

  .promo-code {
    width: 100%;
    text-align: center;
    font-family: ${props => props.theme.fonts.serif};
    font-size: 2rem;
    margin: 2rem 0 1rem;

    p:first-of-type {
      font-size: 1rem;
      text-align: left;
    }

    .code {
      padding: 0.5rem 0;
      background: ${props => props.theme.colors.disabled};
    }
  }

  .disclaimer {
    padding-top: 0.5rem 1rem 1rem;
    font-size: 1rem;
    line-height: 1em;
    color: ${props => props.theme.colors.secondary};
    font-style: italic;
    text-align: justify;
  }
`

const ModalExit = styled.p`
  display: inline-block;
  border-bottom: ${props => `2px dotted ${props.theme.colors.black}`};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.primary};
    border-bottom: ${props => `2px dotted ${props.theme.colors.primary}`};
  }
`

const Modal = props => {
  const [display, setDisplay] = useState(false)
  // eslint-disable-next-line
  const displayedOnce = window.sessionStorage

  const displayModal = delay => {
    setTimeout(() => {
      setDisplay(true)
      sessionStorage.setItem("displayed", true)
    }, delay)
  }

  useEffect(() => {
    if (!sessionStorage.getItem("displayed")) {
      displayModal(props.delay)
    }
  }, [props.delay])

  const handleExit = () => {
    setDisplay(false)
  }

  return (
    <ModalWrapper displayed={display}>
      <ModalTitleBlock>
        <h2>{props.promoTitle}</h2>
        <h4>{props.promoSubtitle}</h4>
      </ModalTitleBlock>
      <ModalInfoBlock>
        <p className="promo-text">{props.promoText}</p>
        {props.promoCode ? (
          <div className="promo-code">
            <p>Promo Code:</p>
            <p className="code">{props.promoCode}</p>
          </div>
        ) : null}
        <ModalButton to={props.to} primary>
          {props.promoButton}
        </ModalButton>
        <ModalExit onClick={handleExit} onKeyDown={handleExit}>
          NO THANKS
        </ModalExit>
        <p className="disclaimer">{props.promoDisclaimer}</p>
      </ModalInfoBlock>
    </ModalWrapper>
  )
}

Modal.propTypes = {
  delay: PropTypes.number.isRequired,
}

export default Modal
