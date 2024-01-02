import React from "react";
import { Outlet, useParams, NavLink } from "react-router-dom";
import data from "../../assets/data.js"

export default function HostVansDetails(){
    const {id} = useParams();

    const [vanD] = data.filter((ele)=>{
        if(ele.id === id){
            return true
        }
    })
    const [vansData, setVansData] = React.useState(vanD);

    return (
        <div>
            <NavLink to=".." relative="path">Back to all Vans</NavLink>
            <img src={vansData.imageUrl} alt="vans detail imge" width="150px"/>
            <div>{vansData.name}</div>
            <div>{vansData.price}</div>
            <NavLink to=".">Details</NavLink>
            <NavLink to="price">Pricing</NavLink>
            <NavLink to="photos">Photos</NavLink>
            <Outlet context={{vansData}} />
        </div>
    )

}