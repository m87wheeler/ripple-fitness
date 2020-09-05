// Card with prices and joining options
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Card from "../shared/Card"
import Button from "../shared/Button"

const CardContainer = styled(Card)`
  max-width: 30rem;
  transform: ${props => (props.focus ? "scale(1.1)" : "scale(1)")};
`

const CardWrapper = styled.div`
  position: relative;
  margin: 3rem 1rem 1rem;
  background: ${props =>
    props.focus ? props.theme.colors.primary : props.theme.colors.white};
  border: ${props =>
    props.focus ? "none" : `3px solid ${props.theme.colors.primary}`};
  padding: 1rem;
  text-align: center;
  box-shadow: ${props => props.theme.material.shadow};

  @media (max-width: 1600px) {
    margin-bottom: 5rem;
  }

  h1 {
    font-size: 4rem;
    font-weight: 900;
    color: ${props =>
      props.focus ? props.theme.colors.white : props.theme.colors.primary};
    letter-spacing: ${props => props.theme.spacing.medium};
  }

  h3 {
    margin-top: -0.5rem;
    font-size: 1rem;
    color: ${props => props.theme.colors.disabled};
    letter-spacing: ${props => props.theme.spacing.small};
  }

  .membership-card--duration {
    display: inline-block;
    background: ${props => props.theme.colors.white};
    padding: 0.5rem 2rem;
    color: ${props => props.theme.colors.black};
    margin: 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: ${props => props.theme.spacing.small};
  }

  .membership-card--expiry {
    font-size: 0.9rem;
    color: ${props =>
      props.focus ? props.theme.colors.disabled : props.theme.colors.secondary};
    font-style: italic;
  }

  .membership-card--info {
    width: 70%;
    margin: 1rem 15% 0;
    color: ${props =>
      props.focus ? props.theme.colors.white : props.theme.colors.secondary};
  }
`

const CardButton = styled(Button)`
  display: block;
  margin: 2rem auto 1rem;
`

const Saving = styled.p`
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  height: 3rem;
  padding: 0 2rem;
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: ${props => props.theme.spacing.small};
  font-weight: 700;
  line-height: calc(3rem);
  background: ${props => props.theme.colors.white};
  outline: ${props => `3px solid ${props.theme.colors.primary}`};
`

const Title = styled.h2`
  color: ${props =>
    props.focus ? props.theme.colors.white : props.theme.colors.primary};
  font-size: 3rem;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.075rem;
  -webkit-text-stroke-color: ${props =>
    props.focus ? props.theme.colors.white : props.theme.colors.primary};
  text-align: center;
  margin: 2rem 0 1rem;
`

const MembershipCard = props => {
  const calculateSaving = (prev, curr) => {
    if (curr === 0) {
      return 100
    } else {
      return Math.floor(Math.abs((curr / prev) * 100 - 100))
    }
  }

  const currency = num => {
    if (num % 1 !== 0) {
      return `£${num}0`
    } else {
      return `£${num}`
    }
  }

  const parseDate = date => {
    const parsed = new Date(date)
    const yyyy = parsed.getFullYear()
    const mm =
      parsed.getMonth() + 1 < 10 ? `0${parsed.getMonth()}` : parsed.getMonth()
    const dd = parsed.getDate() < 10 ? `0${parsed.getDate()}` : parsed.getDate()
    var fdate = `${dd}/${mm}/${yyyy}`
    return fdate
  }
  const stringDate = parseDate(props.expiry)

  return (
    <CardContainer focus={props.focus} className={props.className}>
      <CardWrapper focus={props.focus}>
        <Saving>{`${calculateSaving(
          props.normalCost,
          props.cost
        )}% Saving`}</Saving>
        <Title focus={props.focus}>{props.title}</Title>
        <h1>{currency(props.cost)}</h1>
        <h3>{`(Normally ${currency(props.normalCost)})`}</h3>
        <p className="membership-card--duration">{props.duration}</p>
        <p className="membership-card--expiry">Expires {stringDate}</p>
        <p className="membership-card--info">{props.info}</p>
        {props.focus ? (
          <CardButton href={props.link} outline>
            {props.buttonText}
          </CardButton>
        ) : (
          <CardButton href={props.link} primary>
            {props.buttonText}
          </CardButton>
        )}
      </CardWrapper>
    </CardContainer>
  )
}

MembershipCard.propTypes = {
  focus: PropTypes.bool,
  normalCost: PropTypes.number.isRequired,
  cost: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string,
  info: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
}

export default MembershipCard
