import React from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'

const StyledHeader = styled.header`
  background: #b6e1dd;
  padding: 20px;
`

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
`

function Header() {
  return (
    <StyledHeader>
      <Navigation>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/ich">Ich</NavLink>
        <NavLink to="/wir">Wir</NavLink>
        <NavLink to="/welt">Welt</NavLink>
      </Navigation>
    </StyledHeader>
  )
}

export default Header

/*
        <Navigation>
          NAvigaion
          <NavLink to="/" activeClassName="selected">
            Seekarten
          </NavLink>
          {chartList.map(chart => (
            <NavLink title={chart.title} to={'/' + chart.title.toLowerCase()} />
          ))}
          Nav ENde
        </Navigation>
        */
