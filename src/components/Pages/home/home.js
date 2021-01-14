/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Dashboard from '../dashboard/dashboard'
import {
  App,
  Container,
  Typography,
  Image,
  Section,
  TextTitle
} from './homeStyle'
import imgCoverOne from '../../../assets/illustrations/illustration1.png'
import imgCoverTwo from '../../../assets/illustrations/illustration2.png'
import imgCoverThree from '../../../assets/illustrations/illustration3.jpg'

const Home = () => {
  // const [current, setCurrent] = useState(0)

  return (
    <App>
      <Dashboard />
      <Container>
        <Typography> Bienvenue sur ScheduleGO </Typography>{' '}
        <Section>
          <Image src={imgCoverOne} alt='cover1' />
          <TextTitle>
            {' '}
            Organiser, planifier vos évènements comme vous le sentez.à distance
            ou chez vous, ça marche aussi.{' '}
          </TextTitle>{' '}
        </Section>{' '}
        <Section>
          <TextTitle>
            Désormais vous pourrez surveiller votre évènement depuis votre
            smartphone{' '}
          </TextTitle>{' '}
          <Image src={imgCoverTwo} alt='cover2' />
        </Section>{' '}
        <Section>
          <Image src={imgCoverThree} alt='cover3' />
          <TextTitle>
            {' '}
            Des Dailys meeting, une reunion de travail, c 'est vous qui décidez
            sur ScheduleGO{' '}
          </TextTitle>{' '}
        </Section>{' '}
      </Container>{' '}
    </App>
  )
}
export default Home
