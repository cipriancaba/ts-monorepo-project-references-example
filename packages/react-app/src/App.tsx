import React from 'react'
import logo from './logo.svg'
import './App.css'
import { SHARED_CONFIG } from '@mono/shared'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I SEE MONOREPOS</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Is shared: {SHARED_CONFIG.SHARED}</p>
      </header>
    </div>
  )
}

export default App
