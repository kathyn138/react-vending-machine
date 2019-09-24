import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const ACTIVE_STYLES = {
    fontWeight: "bold", 
    color: "black"
}

class NavBar extends Component {
    render() {
        return (
            <nav className="NavBar">
                <NavLink exact to="/" activeStyle={ ACTIVE_STYLES }>Home</NavLink>
                <NavLink exact to="/chips" activeStyle={ ACTIVE_STYLES }>Chips</NavLink>
                <NavLink exact to="/soda" activeStyle={ ACTIVE_STYLES }>Sodas</NavLink>
                <NavLink exact to="/candybar" activeStyle={ ACTIVE_STYLES }>Candy Bars</NavLink>
            </nav>
        )
    }
}

export default NavBar;