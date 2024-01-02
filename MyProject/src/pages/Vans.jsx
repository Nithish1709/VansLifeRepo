import React, { useState } from "react";
import data from "../assets/data.js"
import { NavLink, useSearchParams } from "react-router-dom";

export default function Vans(){

    const [searchParams, setSearchParams] = useSearchParams();
    
    const filterType = searchParams.get("type");
    
    const vansToDisplay = filterType ? data.filter((ele)=>{
        if(ele.type === filterType){
            return true
        }
    }):data
    

    const vansElement =    vansToDisplay.map((ele)=>{
            return(
                <div>
                    <NavLink to={ele.id}
                        state={{
                        search: `?${searchParams.toString()}`,
                        type: filterType
                        }}
                    >
                        <img src={ele.imageUrl} alt="vans image" width="100px"/>
                        <div>
                            <h3>{ele.name}</h3>
                            <h6>{ele.price}/day</h6>
                            <p>{ele.type}</p>
                        </div>
                    </NavLink>

                </div>
            )
    })

    function handleFilterChange(key, value){
        setSearchParams((pre)=>{

            if(value === null){
                pre.delete(key)
            }else{
                pre.set(key, value)
            }
             
            return pre
        })

    }

    return(
        <div>
            
            <h3>Explore our van options</h3>
            <div className="filter--button">

                <button 
                onClick={()=>{
                    handleFilterChange("type", "simple")
                }}>Simple</button>
                <button
                onClick={()=>{
                    handleFilterChange("type", "luxury")
                }}>Luxury</button>
                <button
                onClick={()=>{
                    handleFilterChange("type", "rugged")
                }}>Rugged</button>
                <button
                onClick={()=>{
                    handleFilterChange("type", null)
                }}>clear filter</button>

            </div>
            {vansElement}
        </div>
    )
}