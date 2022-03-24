import React from 'react'
import { Link } from 'react-router-dom'
import './ColorList.css'

const ColorList = ({ colors }) => {
  const links = Object.keys(colors).map(name => (
    <li key={name}>
      <Link to={`/colors/${name}`}>{name}</Link>
    </li>
  ))

  return (
    <div className="ColorList">
      <header className="ColorList-header">
        <h1 className="ColorList-title">Welcome to the Color Making Factory</h1>
        <h1>
          <Link to="/colors/new">Add Color Here!</Link>
        </h1>
      </header>
      <div className="ColorList-intro">
        <p>Select a Color!</p>
        <ul>{links}</ul>
      </div>
    </div>
  )
}

export default ColorList
