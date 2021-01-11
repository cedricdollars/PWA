import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const DashboardContainer = styled.div`
  min-width: 30px;
  width: 20%;
  background-color: #fff;

  box-shadow: 28px 51px 125px 0px rgba(0, 0, 0, 0.07);
`

export const MenuItem = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
`
export const ListItem = styled(Link)`
  text-decoration: none;
  font-family: 'Poppins';
  font-size: 1.3rem;
  margin-top: 2rem;
  padding-left: 5rem;
  color: #68676d;
  transition: all 100ms ease-in-out;
  &.active {
    color: darkblue;
  }
  &:hover {
    color: darkblue;
  }
`
