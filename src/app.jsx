import './app.css';
import React from 'react';
import NavBar from './components/navbar';
import Habits from './components/habits';

function App() {
  return (
    <>
      <NavBar />
      <Habits />
    </>
  );
}

export default App;