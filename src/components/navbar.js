import React from "react";
import { ReactDOM } from "react";
import logo from '../images/globe.png'

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav-logo"/>
            <h1>Travel Journal</h1>
        </nav>
    )
}