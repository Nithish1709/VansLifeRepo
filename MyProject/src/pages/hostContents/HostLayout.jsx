import React from "react";
import { NavLink } from "react-router-dom";

export default function HostLayout(){
    return(
        <nav>
            <NavLink to=".">Dashboard</NavLink>
            <NavLink to="income">Income</NavLink>
            <NavLink to="vans">Vans</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
        </nav>
    )
}