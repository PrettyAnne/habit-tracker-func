import './app.css';
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import NavBar from './components/navbar';
import Habits from './components/habits';

function App() {
  return (
    <RecoilRoot>
      <NavBar />
      <Habits />
    </RecoilRoot>
  );
}

export default App;