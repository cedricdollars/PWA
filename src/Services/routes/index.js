import React from 'react'
import Auth from '../auth'
import Header from '../../components/Pages/header/header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from '../../components/Pages/signin/signin'
import SignUp from '../../components/Pages/signup/signup'
import Home from '../../components/Pages/home/home'
import Event from '../../components/Pages/events/event'
import About from '../../components/Pages/about/about'
import NotFound from '../../components/Pages/notFound/404'
import Contact from '../../components/Pages/contact/contact'
import Calendar from '../../components/Pages/calendar/calendar'

const publicRoutes = [
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }
]

const privateRoutes = [
  {
    path: '/welcome',
    name: 'welcome',
    component: Home
  },
  {
    path: '/events',
    name: 'event',
    component: Event
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  }
]

const IndexRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {' '}
        {publicRoutes.map(({ path, component: C }, index) => (
          <Route
            key={index}
            path={path}
            exact
            render={props => <C {...props} />}
          />
        ))}{' '}
        {privateRoutes.map(({ path, component: C }, index) => (
          <Auth key={index} path={path} exact component={C} />
        ))}{' '}
        <Route component={NotFound} />{' '}
      </Switch>{' '}
    </Router>
  )
}
export default IndexRouter
