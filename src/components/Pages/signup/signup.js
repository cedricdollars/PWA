import React from 'react'
import { useState, useContext } from 'react'
import { FirebaseContext } from '../../../Services/firebase/index'
import bgImage from '../../../assets/illustrations/bg-illustration.svg'
import {
  Container,
  LoginContainer,
  Title,
  Subtitle,
  TitleForm,
  FormLogin,
  Input,
  Button,
  AsideContainer
} from './signupStyle'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const firebase = useContext(FirebaseContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const btnValid =
    name === '' || email === '' || password === '' ? (
      <Button disabled> Valider </Button>
    ) : (
      <Button> Valider </Button>
    )

  const handleSubmit = e => {
    try {
      e.preventDefault()
      firebase.register(email, password)
      setName('')
      setEmail('')
      setPassword('')

      console.log('Email et mot passe enregistrés')
    } catch (e) {
      console.log(`Une erreur est survenue : ${e}`)
    }
  }
  return (
    <>
      <Title> Bienvenue sur ScheduleGO </Title>{' '}
      <Container>
        <AsideContainer>
          <img
            style={{ width: 700, height: 700 }}
            src={bgImage}
            alt='illustration'
          />
        </AsideContainer>{' '}
        <LoginContainer>
          <Subtitle> Vous avez un évènement à planifier ? </Subtitle>{' '}
          <TitleForm> Créer votre compte </TitleForm>{' '}
          <FormLogin onSubmit={handleSubmit}>
            <Input
              type='text'
              placeholder='Votre nom ex: John Doe'
              value={name}
              onChange={e => setName(e.target.value)}
            />{' '}
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
            {btnValid}{' '}
          </FormLogin>{' '}
          <Link
            to='/signin'
            style={{ fontSize: '1.2rem', textDecoration: 'none' }}
          >
            {' '}
            Connectez - vous{' '}
          </Link>{' '}
        </LoginContainer>{' '}
      </Container>{' '}
    </>
  )
}
export default SignUp
