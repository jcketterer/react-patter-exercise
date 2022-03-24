import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './ColorForm.css'

const ColorForm = ({ addColor }) => {
  const [form, updateForm] = useState({ name: '', hex: '#ffffff' })
  const history = useHistory()

  const handleChange = e => {
    e.persist()
    updateForm(form => ({ ...form, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    addColor({ [form.name]: form.hex })
    history.push('/colors')
  }

  const { hex, name } = form

  return (
    <div className="NewColor">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name Of Color</label>
          <input
            name="name"
            id="name"
            placeholder="Enter Color Name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="hex">Color</label>
          <input type="color" name="hex" id="hex" onChange={handleChange} value={hex} />
        </div>
        <input type="submit" value="Add Color!" readOnly />
      </form>
    </div>
  )
}

export default ColorForm
