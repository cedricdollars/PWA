/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from 'react'
import { FirebaseContext } from '../../../Services/firebase/index'

const SignOut = ({ history }) => {
  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    firebase.logout()
    history.push('/signin')
  }, [firebase])
  return <div> Déconnexion </div>
}
export default SignOut
