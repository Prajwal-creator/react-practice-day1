import React from "react";
import "./product.css";

function Card({name,age,role}){
    return(
        <div>
                <h1>{name}</h1> 
                <h1>{age}</h1>
                <h1>{role}</h1>

                {age>21? (<h1 className="green">Minor</h1>) :(<h1 className="red">Major</h1>)}
        </div>

    )

}
 
export default Card;