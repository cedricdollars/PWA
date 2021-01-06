import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from '../../components/Pages/entry/index'
import Home from '../../components/Pages/dashboard/home/home'
import Event from '../../components/Pages/dashboard/events/event'
import About from '../../components/Pages/dashboard/about/about'
import SignOut from '../../components/Pages/dashboard/signout/signout'

const IndexRouter = () => {
  return (
    <Router>
      <Index />
      <Switch>
        <Route exact path='/home' component={Home} />{' '}
        <Route path='/event' component={Event} />{' '}
        <Route path='/about' component={About} />{' '}
        <Route path='/signout' component={SignOut} />{' '}
      </Switch>{' '}
    </Router>
  )
}

export default IndexRouter
