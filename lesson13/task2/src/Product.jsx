import React from "react";
import { Link } from "react-router-dom";
0
const Product = ({ match }) => {
    return (
        <div className="product">
            {match.params.productId}
        </div>
    );
  
}

export default Product; 