import React from 'react'
import { NavBar, Logo, ProfileInfo, TextInfo, Logout } from './headerStyle'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()
  const userInfo = JSON.parse(localStorage.getItem('user'))
  const onLogout = () => {
    localStorage.removeItem('user')
    history.push('/signin')
  }
  return (
    <>
      <NavBar>
        <Logo to='/welcome'> SCHEDULEGO </Logo>{' '}
        {userInfo && (
          <ProfileInfo>
            <TextInfo> {userInfo.user.email} </TextInfo>{' '}
            <Logout onClick={onLogout} />{' '}
          </ProfileInfo>
        )}{' '}
      </NavBar>{' '}
    </>
  )
}
export default Header
