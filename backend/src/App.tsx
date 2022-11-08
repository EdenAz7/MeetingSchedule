import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routing from './Components/Routing/Routing';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <hr />
      <Routing />
    </div>
  );
}

export default App;
