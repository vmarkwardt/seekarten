import React from 'react'
import styled from 'styled-components'
import { NavLink as RRDNavlink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { chartWorldColor } from '../commons/constants'

const StyledLink = styled(RRDNavlink)`
  border: 2px solid
    ${props => (props.btncolor ? props.btncolor : chartWorldColor)};
  border-radius: 3px;
  background-color: ${props => props.btncolor || chartWorldColor};
  color: white;
  display: inline-block;
  margin: 5px;
  height: 43px;
  width: 43px;
  text-decoration: none;
  text-align: center;
  padding-top: 8px;
  transition: all 300ms ease-in-out;

  &:hover {
    border-color: whitesmoke;
  }

  &.active {
    border-color: whitesmoke;
  }

  &.hide {
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
  }
`

export default function ChartLink({ name, btnColor, path, className }) {
  return (
    <StyledLink to={path} btncolor={btnColor} className={className}>
      {name}
    </StyledLink>
  )
}

ChartLink.propTypes = {
  name: PropTypes.string.isRequired,
  btnColor: PropTypes.string,
  path: PropTypes.string.isRequired,
}
