import React, { useContext } from 'react'
import { NavBar, Logo, ProfileInfo, TextInfo, Logout } from './headerStyle'
import { FirebaseContext } from '../../../Services/firebase/index'

const Header = () => {
  const firebase = useContext(FirebaseContext)
  const userInfo = JSON.parse(localStorage.getItem('user'))

  const onLogout = () => {
    firebase.logout()
    console.log('called')
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
