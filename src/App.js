import React from 'react';
import Login from './components/Login'
import Races from './components/Races'

import './App.css';

function App() {
  return (
    <div>
      <header>
        <div>
          initial react app
        </div>
        <Login/>
        <Races/>
      </header>
    </div>
  );
}

export default App;
