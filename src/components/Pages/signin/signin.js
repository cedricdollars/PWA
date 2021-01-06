import React from 'react'
import LoginGoogle from '../../../Services/google-auth/login'
import {
  Container,
  LoginContainer,
  Title,
  Subtitle,
  LoginTitle,
  FormLogin,
  Input,
  Button,
  AsideContainer
} from './signinStyle'

const SignIn = () => {
  return (
    <>
      <Title> Bienvenue sur ScheduleGO </Title>{' '}
      <Container>
        <AsideContainer />
        <LoginContainer>
          <Subtitle> Vous avez un évènement à planifier ? </Subtitle>{' '}
          <LoginTitle> Commencer dès maintenant! </LoginTitle>{' '}
          <FormLogin>
            <Input
              type='email'
              placeholder='Votre email? ex: dg@yahoor.fr'
              name='email'
            />
            <Input
              type='password'
              placeholder='Votre mot de passe'
              name='password'
            />
            <Button> Allez - y! </Button> <LoginGoogle />
          </FormLogin>{' '}
        </LoginContainer>{' '}
      </Container>{' '}
    </>
  )
}
export default SignIn
