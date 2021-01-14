import React from 'react'
import { NavBar, Logo, ProfileInfo, TextInfo } from './headerStyle'

const Header = () => {
  const userInfo = JSON.parse(localStorage.getItem('user'))

  return (
    <>
      <NavBar>
        <Logo to='/welcome'> SCHEDULEGO </Logo>{' '}
        <ProfileInfo>
          {' '}
          {userInfo && <TextInfo> {userInfo.user.email} </TextInfo>}{' '}
        </ProfileInfo>{' '}
      </NavBar>{' '}
    </>
  )
}
export default Header
