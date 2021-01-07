import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from '../../components/Pages/signin/signin'
import SignUp from '../../components/Pages/signup/signup'
import Home from '../../components/Pages/dashboard/home/home'
import Event from '../../components/Pages/dashboard/events/event'
import About from '../../components/Pages/dashboard/about/about'
import SignOut from '../../components/Pages/dashboard/signout/signout'
import NotFound from '../../components/Pages/notFound/404'
import Footer from '../../components/Pages/footer/footer'

const IndexRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />{' '}
        <Route path='/signin' component={SignIn} />{' '}
        <Route path='/signup' component={SignUp} />{' '}
        <Route path='/event' component={Event} />{' '}
        <Route path='/about' component={About} />{' '}
        <Route path='/signout' component={SignOut} />{' '}
        <Route component={NotFound} />{' '}
      </Switch>{' '}
      <Footer />
    </Router>
  )
}

export default IndexRouter
