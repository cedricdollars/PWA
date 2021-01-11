import React from 'react'
import { DashboardContainer, MenuItem, ListItem } from './dashboard.style'

const Dashboard = () => {
  return (
    <DashboardContainer>
      <MenuItem>
        <ListItem to='/welcome' activeStyle>
          Accueil{' '}
        </ListItem>{' '}
        <ListItem to='/events' activeStyle>
          ÉVènements{' '}
        </ListItem>{' '}
        <ListItem to='/about' activeStyle>
          À propos{' '}
        </ListItem>{' '}
        <ListItem to='/contact' activeStyle>
          Contact{' '}
        </ListItem>{' '}
        <ListItem to='/signout' activeStyle>
          Se déconnecter{' '}
        </ListItem>{' '}
      </MenuItem>{' '}
    </DashboardContainer>
  )
}
export default Dashboard
