import React from "react";

const Amd=({name,clas,age,description,num})=>{
        const nums=Number(num)
    return(
        <div>
            <ul>
                {nums >= 30?(<div>
                    <li>{name}</li>
                    <li>{clas}</li>
                    <li>{age}</li>
                    <li>{description}</li>
                </div>) : (<>
                      <h1>the nuber is no greater {nums}</h1>
                </>)
                  } 
            </ul>
        </div>
    )
}

export default Amd;