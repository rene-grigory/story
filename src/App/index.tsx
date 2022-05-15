import React from 'react'
import { Button } from '../Button'
import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Button label="Click Me" size="large" primary onClick={() => alert('Hello World!')} />
    </div>
  )
}
