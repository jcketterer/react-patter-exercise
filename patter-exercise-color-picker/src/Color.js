import React from 'react'
import { Link } from 'react-router-dom'
import './Color.css'

const Color = ({ hex, color, history }) => {
  if (!hex) {
    history.push('/colors')
  }

  return (
    <div className="Color" style={{ backgroundColor: hex }}>
      <p>This is {color}</p>
      <p>Ain't it Purty</p>
      <p>
        <Link to="/">Go Back</Link>
      </p>
    </div>
  )
}

export default Color
