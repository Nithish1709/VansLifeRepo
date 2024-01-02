import React from "react"
import { useParams, NavLink, useLocation } from "react-router-dom"
import data from "../assets/data.js"
import Vans from "./Vans.jsx"


export default function VansDetails(){

    const {id} = useParams()
    const location = useLocation()
    

    const search = location.state.search ?  (location.state.search) : ""
    const type = location.state?.type || "all"
    const [vanElements] =  data.filter((ele)=>{
        if(ele.id === id){
            return true
        }
    })



    return (
        <div>
            <NavLink to={`..${search}`} relative="path">Back to {type} vans</NavLink>
            <img src={vanElements.imageUrl} alt="vans image" width="200px" />
            <div>
                <p>{vanElements.type}</p>
                <h2>{vanElements.name}</h2>
                <p>{vanElements.price}</p>
                <p>{vanElements.description}</p>
                <button>Rent this van</button>

            </div>

        </div>
    )
}
