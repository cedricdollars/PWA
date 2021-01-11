import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.nav`
  height: 70px;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
`
export const NavItem = styled.div``
export const Logo = styled(Link)`
  color: #000;
  font-size: 2rem;

  font-family: 'Hanalei Fill';
  cursor: pointer;
  text-decoration: none;
`

export const ProfileInfo = styled.div`
  font-family: 'Nunito';
  display: inline;
`
export const TextInfo = styled.strong`
  color: #02567d;
  font-size: 1.1.rem;
`
