import styled, { css } from 'styled-components'
import { RiAddCircleFill } from 'react-icons/ri'
import { TiDeleteOutline } from 'react-icons/ti'
export const App = styled.div`
  height: 100vh;
  display: flex;
  background-color: #fff;
`

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`
export const Container = styled.div`
  width: 80%;
`
export const Title = styled.h1`
  font-size: 1.4rem;
  text-align: center;
  font-weight: 700;
  margin-top: 5vh;
  font-family: 'Poppins';
`
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormArea = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`
export const FormGroup = styled.div``
export const BoxArea = styled.form`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SearchInput = styled.input`
  width: 60%;
  padding: 0 15px;
  height: 65px;
  font-family: inherit;
  &::placeholder {
    font-family: 'Poppins';
  }
  ${sharedStyles}
  &:focus {
    border: 1px solid #02567d;
  }
`

export const Label = styled.label`
  font-family: 'Nunito';
`
export const Input = styled.input`
  width: 60%;
  border-radius: 5px;
  display: block;
  ${sharedStyles}
`
export const Box = styled.div``
export const LabelAdd = styled.p`
  font-family: 'Poppins';
  padding: 0 10px;
`
export const BtnAdd = styled(RiAddCircleFill)`
  outline: none;

  font-size: 3rem;
  color: blue;
  cursor: pointer;
`
export const ButtonArea = styled.div`
  display: inline-flex;
`

export const Button = styled.button`
  font-family: 'Poppins';
  padding: 10px 20px;
  font-size: 1rem;
  background: none;
  border: 1px solid black;
  transition: 100ms all ease-in-out;
  background: rgba(0, 10, 200, 0.8);

  outline: none;
  &:hover {
    background: rgba(0, 10, 150, 0.8);
    cursor: pointer;
    color: white;
  }
`
export const ButtonClose = styled(Button)`
  background-color: rgba(200, 0, 0, 0.8);
  border: transparent;
  margin-left: 5px;
  &:hover {
    background: rgba(230, 0, 0, 0.7);
    color: black;
  }
`
export const ContainerListEvent = styled.div`
  width: 60%;
`
export const DivBox = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2vh;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
`
export const P = styled.p`
  text-align: left;
  font-size: 1rem;
  font-family: 'Poppins';
`
export const Text = styled.p`
  text-align: center;
  font-size: 1rem;
  font-family: 'Poppins';
`
export const ContentBox = styled.div`
  padding: 3vh 20px;
`
export const BtnDelete = styled(TiDeleteOutline)`
  cursor: pointer;
  outline: none;
  color: red;
  font-size: 30px;
`
export const IconBox = styled.div``
export const SpanError = styled.span`
  display: block;
  font-size: 17px;
  font-family: 'Poppins';
  color: rgba(200, 0, 5, 0.9);
`
