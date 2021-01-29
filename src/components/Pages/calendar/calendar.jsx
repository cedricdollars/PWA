/* eslint-disable prettier/prettier */
import React from 'react'
import { Button } from './calender-style'
import Dashboard from '../dashboard/dashboard'
import { App, Container } from './calender-style'
const Calendar = () => {
  var gapi = window.gapi
  var CLIENT_ID = process.env.REACT_APP_GOOGLE_ID_CLIENT
  var API_KEY = process.env.REACT_APP_API_KEY
  var DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
  ]
  var SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'

  const handleCalendar = () => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      })

      gapi.client.load('calendar', 'v3', () => console.log('Calendar'))

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          var event = {
            summary: 'Google I/O 2015',
            location: '5 Avenue Charles de Gaulle',
            description: 'Conférence des développeurs',
            start: {
              dateTime: '2021-05-28T09:19:00-07:00',
              timeZone: 'America/Los_Angeles'
            },
            end: {
              dateTime: '2021-05-28T17:20:50-07:00',
              timeZone: 'America/Los_Angeles'
            },
            recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
            attendees: [
              { email: 'gabyngoune@yahoo.com' },
              { email: 'sbrin@example.com' }
            ],
            reminders: {
              useDefault: false,
              overrides: [
                { method: 'email', minutes: 24 * 60 },
                { method: 'popup', minutes: 10 }
              ]
            }
          }

          var request = gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: event
          })
          request.execute(event => {
            window.open(event.htmlLink)
          })
        })
    })
  }

  return (
    <>
      <App>
        <Dashboard />
        <Container>
          <Button style={{ color: 'white' }} onClick={handleCalendar}>
            Ajouter un calendrier{' '}
          </Button>
        </Container>
      </App>
    </>
  )
}
export default Calendar
