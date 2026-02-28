import React from "react";
import "./prod.css"

function Prod({productName,price,stock}){
      let num=200
    return(
        <div className="product-div">
            <h1>{productName}</h1>
            <h3>{price}</h3>
            {stock==true? <h3>Instock availbe {num}</h3> : <h3>Out of Stock</h3>}

        </div>
    )

}

export default Prod;