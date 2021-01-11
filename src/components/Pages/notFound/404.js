/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Content, Text } from './style404'

const NotFound = () => {
  return (
    <Container>
      <Content>
        <Text> Cette page n 'existe pas </Text>{' '}
        <Link
          to='/welcome'
          style={{ color: 'black', fontSize: '25px', textDecoration: 'none' }}
        >
          Retour à la page d 'accueil{' '}
        </Link>{' '}
      </Content>{' '}
    </Container>
  )
}
export default NotFound
