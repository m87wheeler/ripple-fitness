import React from "react"
import styled from "styled-components"

import PageHeader from "../shared/PageHeader"

import CoachPorthole from "../about/CoachPorthole"

const CoachLayout = styled.div`
  width: 80%;
  margin: 0 10%;
  padding: 5rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

const Header = styled(PageHeader)`
  width: 100%;
  text-align: center;
  padding-bottom: 1rem;
`

const TheTeam = props => {
  return (
    <CoachLayout>
      <Header primary uppercase title="The Team" />
      {props.coachDataArray.map(coach => (
        <CoachPorthole
          key={coach.node.contentful_id}
          name={coach.node.coachName}
          position={coach.node.coachPosition}
          bio={coach.node.coachBio}
          src={coach.node.coachPhoto ? coach.node.coachPhoto.file.url : null}
          animate="slide-up"
          duration={500}
          delay={0}
          easing="ease"
        />
      ))}
    </CoachLayout>
  )
}

export default TheTeam
