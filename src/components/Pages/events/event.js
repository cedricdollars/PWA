/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import Dashboard from '../dashboard/dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { addEvent } from '../../../Services/redux/actions/eventActions'

import {
  App,
  Container,
  Title,
  Section,
  BoxArea,
  FormGroup,
  Label,
  Input,
  SearchInput,
  Box,
  BtnAdd,
  Button,
  FormArea
} from './eventStyle'

const Event = () => {
  const dispatch = useDispatch()
  useSelector(state => state.events)

  const [show, setShow] = useState(false)
  const [event, setEvent] = useState({
    title: '',
    date: '',
    location: ''
  })
  const handleChange = e => {
    e.preventDefault()
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addEvent(event))
    localStorage.setItem('event', JSON.stringify(event))
    setShow(false)
  }

  const showForm = e => {
    e.preventDefault()
    setShow(true)
  }
  const { title, date, location } = event
  return (
    <App>
      <Dashboard />
      <Container>
        <Title> Rechercher un évènement </Title>{' '}
        <Section>
          <BoxArea>
            <SearchInput type='search' id='search' placeholder='Saisie...' />{' '}
          </BoxArea>{' '}
          <Box>
            <BtnAdd size='55px' onClick={showForm} />{' '}
          </Box>{' '}
          {show && (
            <FormArea onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor='title'> Titre </Label>{' '}
                <Input
                  type='text'
                  name='title'
                  value={title}
                  onChange={handleChange}
                />{' '}
                <Label htmlFor='date'> Choisir une date </Label>{' '}
                <Input
                  type='date'
                  name='date'
                  value={date}
                  onChange={handleChange}
                />{' '}
                <Label htmlFor='location'> Où ? </Label>{' '}
                <Input
                  type='search'
                  name='location'
                  value={location}
                  onChange={handleChange}
                />{' '}
                <Button> Créer </Button>{' '}
              </FormGroup>{' '}
            </FormArea>
          )}{' '}
        </Section>{' '}
      </Container>{' '}
    </App>
  )
}
export default Event
