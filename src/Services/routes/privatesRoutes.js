/* eslint-disable react/prop-types */
import React from 'react'
import { FirebaseContext } from '../firebase'
import { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const currentUser = useContext(FirebaseContext)
  return (
    <Route
      {...rest}
      render={routeProps =>
        currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to='/signin' />
        )
      }
    />
  )
}
export default PrivateRoute
