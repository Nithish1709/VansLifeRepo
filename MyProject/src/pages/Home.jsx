import React from "react";
import { NavLink } from "react-router-dom";

export default function Home(){
    return(
        <div>
            from home page
            <NavLink to="vans">Find Your Van</NavLink>
        </div>
    )
}