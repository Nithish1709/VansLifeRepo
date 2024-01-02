import React from "react";


export default function VansCard(props){

    return (
        <div>
            <img src={props.data.imageUrl} alt="Vans_Img" width="150px"/>
            <div>{props.data.name}</div>
            <div>{props.data.price}/day</div>
        </div>
    )
}