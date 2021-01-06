import styled from 'styled-components'
import bgImage from '../../../assets/illustrations/bg-illustration.svg'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 10vh 0;
`
export const LoginContainer = styled.div`
  text-align: center;
`
export const Title = styled.h1`
  font-size: 2.2rem;
  font-family: 'Nunito';
  text-align: center;
  font-weight: 700;
`
export const AsideContainer = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: contain;
`
export const Subtitle = styled.h2`
  font-size: 2rem;
  font-family: 'Nunito';
  font-weight: 700;
`
export const LoginTitle = styled.h3`
  font-size: 1.3rem;
  font-family: 'Nunito';
  text-align: center;
`
export const FormLogin = styled.div`
  height: 50vh;
  border-radius: 10px;
`
export const Input = styled.input`
  width: 80%;
  padding: 15px 0;
  margin: 30px 0;
  color: #010101;
  font-size: 1rem;
  font-family: 'Avenir';
  border-radius: 1px solid #eff7fc;
  &:focus {
    border-radius: 2px solid #eeeeee;
  }
  &::placeholder {
    font-family: 'Avenir';
    font-size: 1rem;
  }
`
export const Button = styled.button`
  background-color: #3c5cc5;
  color: #fff;
  font-family: 'Poppins';
  font-weight: 800;
  padding: 15px 20px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.4rem;
  width: 80%;
  border: none;
  outline: none;
  &:hover {
    background-color: #3c5cc9;
    cursor: pointer;
  }
`
