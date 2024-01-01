import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <NavLink to="/">#VANLIFE</NavLink>
            <NavLink to="/host">Host</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/vans">Vans</NavLink>
        </header>
    )
}