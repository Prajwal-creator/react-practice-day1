import React from "react";
import './sidebar.css';

const Sidebar=({name,age})=>{
    return(
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    )
}

export default Sidebar;