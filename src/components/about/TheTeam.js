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
      <CoachPorthole
        name="Michael Wheeler"
        position="Founder, Coach"
        bio="Anim aliquip irure incididunt velit labore aliqua commodo cupidatat deserunt adipisicing qui eiusmod labore. Aliqua reprehenderit nostrud ea ex. Aute veniam deserunt voluptate esse ut tempor eiusmod."
        src=""
        animate="slide-up"
        duration="500"
        delay="0"
        easing="ease"
      />
      <CoachPorthole
        name="George Something"
        position="Founder, Coach"
        bio="Anim aliquip irure incididunt velit labore aliqua commodo cupidatat deserunt adipisicing qui eiusmod labore. Aliqua reprehenderit nostrud ea ex. Aute veniam deserunt voluptate esse ut tempor eiusmod."
        src=""
        animate="slide-up"
        duration="500"
        delay="0"
        easing="ease"
      />
    </CoachLayout>
  )
}

export default TheTeam
