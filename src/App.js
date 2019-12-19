import React from 'react';
import NavDrawer from './NavDrawer';
import './App.css';
import { Router } from '@reach/router';
import Home from './routes/components/Home';
import About from './routes/components/About';

console.log(<NavDrawer />)

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
      <NavDrawer open={true} />
    </div>
  );
}

export default App;
