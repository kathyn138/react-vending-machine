import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Chips from './Chips';
import CandyBar from './CandyBar';
import Soda from './Soda';
import NavBar from './NavBar';

class VendingMachine extends Component {
  render() {
    return (
      <div className="food-item">
        <img src="https://media.giphy.com/media/FPpTEGx7OlNbxRgpKd/giphy.gif" alt="vending machine guy"></img>
      </div>
    )
  }
}

export default VendingMachine;