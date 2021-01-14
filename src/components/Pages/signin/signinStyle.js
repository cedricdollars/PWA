import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginContainer = styled.div`
  text-align: center;
  margin-top: 5rem;
`
export const Title = styled.h1`
  font-size: 2.2rem;
  font-family: 'Nunito';
  text-align: center;
  font-weight: 700;
`
export const TextError = styled.li`
  text-align: center;
  color: #fff;
  background: #f35461;
  border-radius: 5px;
  padding: 10px 13px;
  font-family: 'Nunito';
  animation: ${fadeIn} 1s 200ms linear;
`
export const AsideContainer = styled.div`
  margin-right: 5rem;
`
export const RightContainer = styled.div`
  text-align: center;
`

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-family: 'Nunito';
  font-weight: 700;
`
export const TitleForm = styled.h3`
  font-size: 1.3rem;
  font-family: 'Nunito';
  text-align: center;
`
export const FormLogin = styled.form`
  width: 100%;
`
export const Input = styled.input`
  width: 100%;
  padding: 15px 5px;
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
  width: 100%;
  border: none;
  transition: all 100ms ease-in-out;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 0.7;
  }
`
export const ContentLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.1rem;
`
export const TextLink = styled.p`
  color: #000;
  font-family: 'Poppins';
  font-size: 1.2rem;
`
export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 4rem;
  background: rgba(1, 0, 0, 0.1);
`
