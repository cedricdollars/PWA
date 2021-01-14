import React from 'react'

import Dashboard from '../dashboard/dashboard'
import { App, Container, Typography, ContainerBody } from './aboutStyle'

const About = () => {
  return (
    <App>
      <Dashboard />
      <Container>
        <Typography>
          À propos de <strong> ScheduleGO </strong>{' '}
        </Typography>{' '}
        <ContainerBody> </ContainerBody>{' '}
      </Container>{' '}
    </App>
  )
}
export default About
