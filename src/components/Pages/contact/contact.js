/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
  App,
  Container,
  Typography,
  FormContact,
  Row,
  InputField,
  InputSelect,
  Label,
  TextArea,
  Button
} from './contact.style'
import Dashboard from '../dashboard/dashboard'

function Contact() {
  return (
    <App>
      <Dashboard />
      <Container>
        <Typography>
          Une question, une préoccupation ? contactez - moi!
        </Typography>{' '}
        <FormContact>
          <Row>
            <Label htmlFor='name'> Nom complet </Label>{' '}
            <InputField type='text' id='name' />
          </Row>{' '}
          <Row>
            <Label htmlFor='email'> Email </Label>{' '}
            <InputField type='email' id='email' />
            <Label htmlFor='tel'> Tel </Label>{' '}
            <InputField type='phone' id='tel' />
          </Row>{' '}
          <Row>
            <Label htmlFor='subject'> Sujet </Label>{' '}
            <InputSelect>
              <option value='rdv'> Prendre rendez - vous </option>{' '}
              <option value='site'> Problème </option>{' '}
              <option value='other'> Autre </option>{' '}
            </InputSelect>{' '}
          </Row>{' '}
          <Row>
            <Label htmlFor='message'> Votre message </Label>{' '}
            <TextArea rows='5' id='message' />
          </Row>{' '}
          <Button type='submit'> Envoyer </Button>{' '}
        </FormContact>{' '}
      </Container>{' '}
    </App>
  )
}

export default Contact
