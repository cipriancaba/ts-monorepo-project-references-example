import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SHARED_CONFIG, DummyShared } from '@mono/shared';
import { CompOne } from '@mono/comps';
import { LegacyComp } from './LegacyComp';

enum Dummy1 {
  A,
  B,
}

const a: Dummy1 = Dummy1.A;
const b: DummyShared = DummyShared.chair;

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
        <CompOne />
        <LegacyComp />
      </header>
    </div>
  );
};

export default App;
