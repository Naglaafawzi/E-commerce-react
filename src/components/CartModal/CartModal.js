import React from 'react'
import { formatPrice } from '../../utils/helpers'
import { Link } from 'react-router-dom'
import "./CartModal.scss"

const CartModal = ({ carts }) => {
    return (
        <div className='cart-modal' id='cartModal'>
            <h5 className='cart-modal-title fw-5 fs-15 text-center'>
                Recently Added Products
            </h5>
            {
                (carts?.length > 0)
                    ? (
                        <div>
                            <div className='cart-modal-list'>
                                {
                                    carts.map((cart) => {
                                        return (
                                            <div className='cart-modal-item grid align-center py-2' key={cart.id}>
                                                <div className='cart-modal-item-img'>
                                                    <img src={cart?.thumbnail} alt="" className='img-cover' />
                                                </div>
                                                <div className='cart-modal-item-title fs-13 text-capitalize'>
                                                    {cart?.title}
                                                </div>
                                                <div className='cart-modal-item-price text-orange fs-14 fw-6'>
                                                    {formatPrice(cart?.discountedPrice)}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                    : (
                        <div className="flex flex-column align-center justify-center cart-modal-empty">
                            <img src="" alt="" />
                        </div>
                    )
            }
            <Link to="/cart" className='text-capitalize view-cart-btn bg-orange fs-15 text-center'>
                view my shopping cart
            </Link>
        </div>
    )
}

export default CartModal