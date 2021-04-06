import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import './scss/App.scss';
import {StartGame} from './components/StartGame/StartGame';
import {Form} from './components/Form/Form';
import {Game} from './components/Game/Game';

function App () {
  return ( 
    
    <Router>
      <div className="App">
  <Route path="/start" component={StartGame} />
  <Route path="/form" component={Form}/>
  <Route path="/game" component={Game} />
  </div>
    </Router>
  );
};

export default App;