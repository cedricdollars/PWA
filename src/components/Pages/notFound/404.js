/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Content, NotFoundText } from './style404'

const NotFound = () => {
  return (
    <Container>
      <Content>
        <NotFoundText> Cette page n 'existe pas </NotFoundText>{' '}
        <Link
          to='/welcome'
          style={{
            color: 'black',
            fontSize: '25px',
            textDecoration: 'none',
            fontFamily: 'Nunito'
          }}
        >
          Revenir à la page d 'accueil{' '}
        </Link>{' '}
      </Content>{' '}
    </Container>
  )
}
export default NotFound
