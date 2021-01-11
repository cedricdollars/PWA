/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import LoginGoogle from '../../../Services/google-auth/login'
import { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../../../Services/firebase/index'
import {
  Container,
  LoginContainer,
  Title,
  Subtitle,
  TextError,
  TitleForm,
  FormLogin,
  Input,
  Button,
  ContentLink,
  TextLink,
  AsideContainer
} from './signinStyle'
import bgImage from '../../../assets/illustrations/bg-illustration.svg'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const SignIn = ({ history }) => {
  const firebase = useContext(FirebaseContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  localStorage.getItem('user')

  useEffect(() => {
    setError('')
  }, [email, password])

  const handleSubmit = e => {
    e.preventDefault()
    firebase
      .login(email, password)
      .then(user => {
        localStorage.setItem('user', JSON.stringify(user))
        // eslint-disable-next-line react/prop-types
        history.push('/welcome')
      })
      .catch(error => setError(error))
  }

  return (
    <>
      <Title> Bienvenue sur ScheduleGO </Title>{' '}
      <Container>
        <AsideContainer>
          <img
            style={{ width: 710, height: 'auto' }}
            src={bgImage}
            alt='illustration'
          />
        </AsideContainer>{' '}
        <LoginContainer>
          <Subtitle> Vous avez un évènement à planifier ? </Subtitle>{' '}
          <TitleForm> Commencer dès maintenant! </TitleForm>{' '}
          {error !== '' && <TextError> {error.message} </TextError>}{' '}
          <FormLogin onSubmit={handleSubmit}>
            <Input
              type='email'
              placeholder='Votre email? ex: johnDoe@yahoor.fr'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />{' '}
            <Input
              type='password'
              placeholder='Votre mot de passe'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />{' '}
            <Button type='submit'> Connexion </Button>{' '}
            <p
              style={{
                fontFamily: 'Poppins',
                fontSize: '1rem',
                marginTop: '15px'
              }}
            >
              {' '}
              ou{' '}
            </p>{' '}
            <LoginGoogle />
          </FormLogin>{' '}
          <ContentLink>
            <TextLink> Vous n 'avez pas de compte?</TextLink>{' '}
            <Link
              to='/signup'
              style={{
                fontSize: '1.2rem',
                textDecoration: 'none',
                fontFamily: 'Poppins'
              }}
            >
              Inscrivez - vous{' '}
            </Link>{' '}
          </ContentLink>{' '}
        </LoginContainer>{' '}
      </Container>{' '}
    </>
  )
}
export default SignIn
