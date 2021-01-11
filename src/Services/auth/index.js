/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from '../firebase'
import { Route } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Auth = ({ component: RouteComponent, ...rest }, props) => {
  const currentUser = useContext(FirebaseContext)
  const [userSession, setUserSession] = useState(null)

  useEffect(() => {
    let unubscribe = currentUser.auth.onAuthStateChanged(user => {
      user ? setUserSession(user) : props.history.push('/signin')
    })

    return () => {
      unubscribe()
    }
  }, [currentUser, userSession])
  //console.log(userSession)
  return (
    <Route
      {...rest}
      render={routeProps => <RouteComponent {...routeProps} />}
    />
  )
}
export default Auth
