import React from 'react'
import "./CartMessage.scss"
import img from "../../assets/images/tick.png"

const CartMessage = () => {
    return (
        <div className='cart-message text-center'>
            <div className='cart-message-icon'>
                <img src={img} alt="tick" />
            </div>
            <h6 className='text-white fs-14 fw-5'>
                An Item Has Been Added To Your Shopping Cart
            </h6>
        </div>
    )
}

export default CartMessage