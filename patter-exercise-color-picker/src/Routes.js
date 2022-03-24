import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'

import ColorList from './ColorList'
import ColorForm from './ColorForm'
import Color from './Color'

const Routes = () => {
  const initColors = JSON.parse(localStorage.getItem('colors')) || {
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF',
  }
  const [colors, setColors] = useState(initColors)

  useEffect(() => localStorage.setItem('colors', JSON.stringify(colors)), [colors])

  const handleNewColor = newColorObj => {
    setColors(existingColors => ({ ...existingColors, ...newColorObj }))
  }

  const renderColors = props => {
    const { color } = props.match.params
    const hexCode = colors[color]
    return <Color {...props} hex={hexCode} color={color} />
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <ColorForm addColor={handleNewColor} />
        </Route>
        <Route path="/colors/:color" render={renderColors} />
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
