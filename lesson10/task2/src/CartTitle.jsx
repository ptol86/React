import React from "react";

const CartTitle = ({userName, count}) => {
    
    return (
        <h1 className="cart-title">
            {`${userName}, you added ${count} products`}
        </h1>

    )
    
}

export default CartTitle;
