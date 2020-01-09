import React from 'react';

import './App.css';
import Home from './component/Home';
import Body from './component/Body';
// import Mainpage from './component/Mainpage';
// import {Route,Link,BrowserRouter as Router} from '../node_modules/react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
      <Body />

    </div>
  );
}

export default App;

