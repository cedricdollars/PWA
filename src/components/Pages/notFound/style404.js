import styled from 'styled-components'
import notFoundImg from '../../../assets/illustrations/notfound.jpg'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${notFoundImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
  background-position: center center;
`
export const Content = styled.section`
  flex: 1 0 auto;
  text-align: center;
`
export const NotFoundText = styled.h1`
  font-family: 'Josefin Sans', 'Poppins', 'Montserrat';
  font-size: 2.4rem;
`
