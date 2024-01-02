import React from "react";
import VansCard from "./VansCard.jsx"
import data from "../../assets/data.js"
import { Link } from "react-router-dom";

export default function HostVans(){

   const [vansData, setVansData] = React.useState(data);
   const cardElements = vansData.map((ele)=>{
    return (
        <Link to={ele.id} key={ele.id}>
            <VansCard data={ele} />
        </Link>)
   })


    return (
        <div>
           {cardElements}
        </div>
    )
}


