import React from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Characters } from './views/Characters';
import { Specialities } from './views/Specialities';
import { Duels } from './views/Duels';
import { Home } from './views/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="main-container">
          <Switch>
            <Route path="/characters">
              <Characters />
            </Route>
            <Route path="/specialities">
              <Specialities />
            </Route>
            <Route path="/duels">
              <Duels />
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
