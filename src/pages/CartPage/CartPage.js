import React from 'react'
import "./CartPage.scss"
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getAllCarts, removeFromCart, toggleCartQty } from '../../store/cartSlice';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { MdDelete } from "react-icons/md"
import img from "../../assets/images/not_found.png"

const CartPage = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts)
  const { itemsCount, totalAmount } = useSelector((state) => state.cart)

  if (carts.length === 0) {
    return (
      <div className='container my-5'>
        <div className='empty-cart flex justify-center align-center flex-column'>
          <img src={img} alt="" />
          <span className='fw-6 fs-15 text-gray'>
            Your Shopping Cart Is Empty.
          </span>
          <Link to="/" className='shopping-btn bg-orange text-white fw-5'>
            Go Shopping Now
          </Link>
        </div>
      </div>
    )
  }
  return (
    <div className='cart bg-whitesmoke'>
      <div className='container'>
        <div className='cart-ctable'>
          <div className='cart-chead bg-white'>
            <div className='cart-ctr fw-6 fs-15'>
              <div className='cart-cth'>
                <span className='cart-ctxt'>S.N.</span>
              </div>
              <div className='cart-cth'>
                <span className='cart-ctxt'>Product</span>
              </div>
              <div className='cart-cth'>
                <span className='cart-ctxt'>Unit Price</span>
              </div>
              <div className='cart-cth'>
                <span className='cart-ctxt'>Quantity</span>
              </div>
              <div className='cart-cth'>
                <span className='cart-ctxt'>Total Price</span>
              </div>
              <div className='cart-cth'>
                <span className='cart-ctxt'>Actions</span>
              </div>
            </div>
          </div>

          <div className='cart-cbody bg-white'>
            {
              carts.map((cart, idx) => {
                return (
                  <div className='cart-ctr  py4' key={cart?.id}>
                    <div className='cart-ctd'>
                      <span className='cart-ctxt'>{idx + 1}</span>
                    </div>
                    <div className='cart-ctd'>
                      <span className='cart-ctxt'>{cart?.title}</span>
                    </div>
                    <div className='cart-ctd'>
                      <span className='cart-ctxt'>{formatPrice(cart?.discountedPrice)}</span>
                    </div>
                    <div className='cart-ctd'>
                      <div className='qty-change flex align-center'>
                        <button className='qty-decrease flex align-center justify-center' onClick={() => dispatch(toggleCartQty({ id: cart?.id, type: "DEC" }))}>
                          <AiOutlineMinus />
                        </button>

                        <div className='qty-value flex align-center justify-center'>
                          {cart?.quantity}
                        </div>

                        <button className='qty-increase flex align-center justify-center' onClick={() => dispatch(toggleCartQty({ id: cart?.id, type: "INC" }))}>
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>

                    <div className='cart-ctd'>
                      <span className='cart-ctxt text-orange fw-5'>
                        {formatPrice(cart?.totalPrice)}
                      </span>
                    </div>

                    <div className='cart-ctd'>
                      <button className='delete-btn' onClick={() => dispatch(removeFromCart(cart?.id))}>Delete</button>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className='cart-cfoot flex align-start justify-between py-3 bg-white'>
            <div className='cart-cfoot-l'>
              <button className='clear-cart-btn fs-15 text-uppercase fw-4' onClick={() => dispatch(clearCart())}>
                <MdDelete />
                <span className='mx-1'>Clear Cart</span>
              </button>
            </div>

            <div className='cart-cfoot-r'>
              <div className='total-txt flex align-center justify-end'>
                <div className='fw-5'>
                  Total ({itemsCount}) items:
                </div>
                <span className='text-orange fs-22 mx-2 fw6'>
                  {formatPrice(totalAmount)}
                </span>
              </div>

              <button className='check-btn text-white bg-orange'>Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage