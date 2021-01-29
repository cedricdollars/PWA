/* eslint-disable react/prop-types */
import React, { useEffect, useContext, useState } from 'react'
import GlobalStyle from '../../../globalStyle'
import store from '../../../Services/redux/store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../header/header'
import Home from '../home/home'
import Calendar from '../calendar/calendar'
import Event from '../events/event'
import About from '../about/about'
import Contact from '../contact/contact'
import NotFound from '../notFound/404'
import SignIn from '../signin/signin'
import SignUp from '../signup/signup'
import { FirebaseContext } from '../../../Services/firebase/'
import PrivateRoute from '../../../Services/routes/privatesRoutes'

function App(props) {
  console.log(props)
  const firebase = useContext(FirebaseContext)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    store.subscribe(() => store.getState().events)
    firebase.auth.onAuthStateChanged(user => {
      user ? setCurrentUser(user) : props.history.push('/signin')
    })
  }, [firebase, currentUser, props.history])
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <PrivateRoute exact path='/' component={Home} />{' '}
          <PrivateRoute path='/calendar' component={Calendar} />{' '}
          <PrivateRoute path='/events/' component={Event} />{' '}
          <PrivateRoute path='/about' component={About} />{' '}
          <PrivateRoute path='/contact' component={Contact} />{' '}
          <Route exact path='/signin' component={SignIn} />{' '}
          <Route path='/signup' component={SignUp} />{' '}
          <Route component={NotFound} />{' '}
        </Switch>{' '}
      </Router>{' '}
      <GlobalStyle />
    </>
  )
}

export default App
