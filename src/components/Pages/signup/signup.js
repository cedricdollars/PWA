import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from '../../../Services/firebase/index'
import bgImage from '../../../assets/illustrations/bg-illustration.svg'
import {
  Container,
  Wrapper,
  LoginContainer,
  TextError,
  Subtitle,
  TitleForm,
  ContentLink,
  TextLink,
  FormLogin,
  Input,
  Button,
  AsideContainer
} from './signupStyle'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const SignUp = ({ history }) => {
  const firebase = useContext(FirebaseContext)

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = e => {
    e.preventDefault()
    setUser({
      ...user,
      [e.target.id]: e.target.value
    })
  }
  const [error, setError] = useState('')

  useEffect(() => {
    setError('')
  }, [user])

  const handleSubmit = e => {
    e.preventDefault()

    const { email, password } = user
    firebase
      .register(email, password)
      .then(data => {
        setUser({ ...user })
        console.log(data)

        // eslint-disable-next-line react/prop-types
        history.push('/')
      })
      .catch(err => {
        console.log(err)
        setError(err)
      })
  }
  const { name, email, password } = user

  return (
    <Wrapper>
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
          <TitleForm> Créer votre compte </TitleForm>{' '}
          {error !== '' && <TextError> {error.message} </TextError>}{' '}
          <FormLogin onSubmit={handleSubmit}>
            <Input
              type='text'
              id='name'
              value={name}
              placeholder='Votre nom ex: John Doe'
              onChange={handleChange}
            />{' '}
            <Input
              type='email'
              id='email'
              value={email}
              placeholder='Votre email? ex: johnDoe@yahoor.fr'
              onChange={handleChange}
            />{' '}
            <Input
              type='password'
              id='password'
              value={password}
              placeholder='Votre mot de passe'
              onChange={handleChange}
            />{' '}
            <Button type='submit'> Valider </Button>{' '}
          </FormLogin>{' '}
          <ContentLink>
            <TextLink> Déja inscrit ? </TextLink>{' '}
            <Link
              to='/signin'
              style={{
                fontSize: '1.2rem',
                textDecoration: 'none',
                fontFamily: 'Poppins'
              }}
            >
              {' '}
              Connectez - vous{' '}
            </Link>{' '}
          </ContentLink>{' '}
        </LoginContainer>{' '}
      </Container>{' '}
    </Wrapper>
  )
}
export default SignUp
