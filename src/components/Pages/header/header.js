import React from 'react'
import { NavStyle, NavLogo } from './headerStyle'

const Header = () => {
  return (
    <>
      <NavStyle>
        <NavLogo to='/'> SCHEDULEGO </NavLogo>{' '}
      </NavStyle>{' '}
    </>
  )
}
export default Header
