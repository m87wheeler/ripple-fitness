import React from "react"
import styled from "styled-components"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

const StyledAccordion = styled(Accordion)`
  box-shadow: ${props => props.theme.material.shadow};
`

const StyledCard = styled(Card)`
  font-family: ${props => props.theme.fonts.sans};
  background: ${props => props.theme.colors.primary} !important;
  color: ${props => props.theme.colors.white};
  border: none !important;
  border-radius: 0;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  .card-header {
    border-top: 1px solid white;
  }

  .card-body {
    background: ${props => props.theme.colors.disabled};
    color: ${props => props.theme.colors.black};
  }
`

const FAQAccordion = props => {
  return (
    <StyledAccordion>
      {props.data.map((entry, i) => (
        <StyledCard key={entry.node.contentful_id}>
          <Accordion.Toggle as={Card.Header} eventKey={i + 1}>
            {entry.node.question.question}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={i + 1}>
            <Card.Body>{entry.node.answer.answer}</Card.Body>
          </Accordion.Collapse>
        </StyledCard>
      ))}
    </StyledAccordion>
  )
}

export default FAQAccordion
