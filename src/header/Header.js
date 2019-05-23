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

// <NavLink exact to="/" name={'Home'} btnColor={''} />
function Header({ linkList }) {
  return (
    <StyledHeader>
      <Navigation>
        {linkList.map(link => (
          <NavLink
            to={'/' + link.name.toLowerCase()}
            name={link.name}
            btnColor={link.color}
            key={link.name}
          />
        ))}
      </Navigation>
    </StyledHeader>
  )
}

export default Header

/*

      ###########
 <NavLink to="/wir">Wir</NavLink>
        <NavLink to="/welt">Welt</NavLink>
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
