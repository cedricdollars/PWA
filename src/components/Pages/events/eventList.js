import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteEvent } from '../../../Services/redux/actions/eventActions'

import {
  ContainerListEvent,
  DivBox,
  P,
  ContentBox,
  IconBox,
  BtnDelete
} from './eventStyle'

const EventList = ({ events }) => {
  const dispatch = useDispatch()
  if (events.length === 0) {
    return <P> Aucun évènement prévu </P>
  } else {
    return (
      <>
        <ContainerListEvent>
          {' '}
          {Object.values(events).map(event => (
            <DivBox key={event.id}>
              <ContentBox>
                <P> {event.title} </P> <i> {event.date} </i>{' '}
              </ContentBox>{' '}
              <IconBox>
                <BtnDelete onClick={() => dispatch(deleteEvent(event))} />{' '}
              </IconBox>{' '}
            </DivBox>
          ))}{' '}
        </ContainerListEvent>{' '}
      </>
    )
  }
}
export default EventList
