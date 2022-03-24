import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = ({ dogs }) => {
  const dogLinks = dogs.map(dog => (
    <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
      {dog.name}
    </NavLink>
  ))
  return (
    <nav>
      <NavLink exact to="/dogs">
        HOME
      </NavLink>
      {dogLinks}
    </nav>
  )
}

export default Nav
