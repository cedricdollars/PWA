import styled, { css } from 'styled-components'

const sharedStyles = css`
  width: 100%;
  height: 80px;
  border-radius: 5px;
  margin: 10px 10px;
  border: 1px solid #f7f7f7;
  background: #f7f7f7;
  outline: none;
`
export const App = styled.div`
  height: 100vh;
  display: flex;
  background-color: #fff;
`

export const Container = styled.div`
  width: 80%;
`
export const Typography = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-family: 'Poppins';
`
export const FormContact = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 10vh;
`
export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  margin-top: 3vh;
  position: relative;
`
export const InputField = styled.input`
  ${sharedStyles}
`
export const Label = styled.label`
  font-family: 'Poppins';
  position: absolute;
  top: -10px;
  left: 10px;
  &:nth-of-type(2) {
    left: 52%;
  }
`
export const InputSelect = styled.select`
  ${sharedStyles}
`
export const Button = styled.button`
  font-family: 'Nunito';
  font-size: 1.25rem;
  border: 1px solid black;
  border-radius: 25px;
  padding: 10px 45px;
  margin-top: 3vh;
  background: darkblue;
  color: #fff;
  transition: 100ms all ease;
  &:hover {
    cursor: pointer;
  }
`
export const TextArea = styled.textarea`
  ${sharedStyles}
  height: 100%;
`
