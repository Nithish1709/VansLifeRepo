import React from "react";
import { NavLink , Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"

export default function Layout(){
    return(
         <div>
            <Header />
            <Outlet />
            <Footer />
         </div>
       
    )
}