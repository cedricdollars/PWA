import React from 'react'
import Dashboard from '../dashboard/dashboard'
import { App, Container, Typography } from './homeStyle'

const Home = () => {
  return (
    <App>
      <Dashboard />
      <Container>
        <Typography> Bienvenue sur ScheduleGO </Typography>{' '}
      </Container>{' '}
    </App>
  )
}
export default Home
