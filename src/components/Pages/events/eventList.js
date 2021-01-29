import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteEvent } from '../../../Services/redux/actions/eventActions'

import {
  ContainerListEvent,
  DivBox,
  P,
  TitleInfo,
  ContentBox,
  IconBox,
  BtnDelete
} from './eventStyle'

const EventList = ({ events }) => {
  const dispatch = useDispatch()
  if (events.length === 0) {
    return <TitleInfo> Aucun évènement prévu </TitleInfo>
  } else {
    return (
      <>
        <ContainerListEvent>
          <TitleInfo> Mes évènements </TitleInfo>{' '}
          {Object.values(events).map(event => (
            <DivBox key={event.id}>
              <ContentBox>
                <P> {event.title} </P> <i> {event.date} </i>{' '}
              </ContentBox>{' '}
              <IconBox>
                <BtnDelete onClick={() => dispatch(deleteEvent(event.id))} />{' '}
              </IconBox>{' '}
            </DivBox>
          ))}{' '}
        </ContainerListEvent>{' '}
      </>
    )
  }
}
export default EventList
