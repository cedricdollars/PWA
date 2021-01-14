/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import Dashboard from '../dashboard/dashboard'
import { validateField, uuid } from '../../../utils/functions'
import { useDispatch, useSelector } from 'react-redux'
import { addEvent } from '../../../Services/redux/actions/eventActions'
import EventList from './eventList'
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
  ButtonClose,
  SpanError,
  ButtonArea,
  FormArea
} from './eventStyle'

let events = []

const Event = () => {
  const dispatch = useDispatch()
  const newEvent = useSelector(state => state.events)

  const [show, setShow] = useState(false)
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const [event, setEvent] = useState({
    id: uuid(),
    title: '',
    date: '',
    location: ''
  })
  const { title, date, location } = event

  const handleChange = e => {
    e.preventDefault()
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    setError('')
  }, [title, date, location])

  const handleSubmit = e => {
    try {
      e.preventDefault()
      validateField(event.title || event.location)
      dispatch(addEvent(event))
      events.push(event)
      localStorage.setItem('events', JSON.stringify(events))
      setEvent({
        title: '',
        date: '',
        location: ''
      })
    } catch (e) {
      setError(e)
    }
  }
  const showForm = e => {
    e.preventDefault()
    setShow(true)
  }
  const closeForm = e => {
    e.preventDefault()
    setShow(false)
  }

  return (
    <App>
      <Dashboard />
      <Container>
        <Title> Rechercher un évènement </Title>{' '}
        <Section>
          <BoxArea>
            <SearchInput
              type='search'
              value={search}
              placeholder='Rechercher un évènement'
              onChange={e => setSearch(e.target.value)}
            />{' '}
          </BoxArea>{' '}
          <EventList events={newEvent} />{' '}
          <Box>
            <BtnAdd size='55px' onClick={showForm} />{' '}
          </Box>{' '}
          {show && (
            <FormArea onSubmit={handleSubmit}>
              {' '}
              {error !== '' && <SpanError> {error.message} </SpanError>}{' '}
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
                <ButtonArea>
                  <Button> Créer </Button>{' '}
                  <ButtonClose onClick={closeForm}> Annuler </ButtonClose>{' '}
                </ButtonArea>{' '}
              </FormGroup>{' '}
            </FormArea>
          )}{' '}
        </Section>{' '}
      </Container>{' '}
    </App>
  )
}
export default Event
