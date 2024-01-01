import React from "react";
import  HostLayout  from "./hostContents/HostLayout";
import { Outlet } from "react-router-dom";

export default function Host(){
    return(

        <div>
            from Host page
            <HostLayout />
            <Outlet />
        </div>
    )
}