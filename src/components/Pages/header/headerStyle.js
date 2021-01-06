import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavStyle = styled.nav`
  font-size: 1.2rem;
  display: flex;
  justify-content: space-around;

  z-index: 99;
  top: 0;
  font-family: 'Poppins';
`
export const NavLogo = styled(Link)`
  color: #000;
  font-size: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`
