import styled from 'styled-components'
import { NavLink as RRDNavlink } from 'react-router-dom'

const NavLink = styled(RRDNavlink)`
  background: #2a9d8f;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  margin-left: 5px;
  margin-right: 5px;
  padding: 5px;

  &:hover {
    background: #e76f51;
  }

  &.active {
    background: #f4a261;
  }
`

export default NavLink
