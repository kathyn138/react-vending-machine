import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import './App.css';
import Chips from './Chips';
import CandyBar from './CandyBar';
import Soda from './Soda';
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/chips" render={() => <Chips />} />
          <Route exact path="/soda" render={() => <Soda />} />
          <Route exact path="/candybar" render={() => <CandyBar />} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
