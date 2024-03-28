import React, { useEffect, useState } from 'react'
import "./ProductSinglePage.scss"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncProductSingle, getProductSingle, getProductSingleStatus } from '../../store/productSlice';
import { STATUS } from '../../utils/status';
import Loader from '../../components/Loader/Loader';
import { formatPrice } from '../../utils/helpers';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { HiShoppingCart } from "react-icons/hi"
import { addToCart, getCartMessageStatus, setCartMessage, setCartMessageOff } from '../../store/cartSlice';
import CartMessage from '../../components/cartMessage/CartMessage';

const ProductSinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getProductSingleStatus);
  const [quantity, setQuantity] = useState(1)
  const cartMessageStatue = useSelector(getCartMessageStatus)

  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id))

    if (cartMessageStatue) {
      setTimeout(() => {
        dispatch(setCartMessageOff())
      }, 2000)
    }
  }, [cartMessageStatue, dispatch, id]);

  let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100))
  if (productSingleStatus === STATUS.LOADING) {
    return <Loader />
  }

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > product?.stock) tempQty = product?.stock;
      return tempQty;
    })
  }

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    })
  }

  const addToCartHandler = (product) => {
    let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100))
    let totalPrice = quantity * discountedPrice
    dispatch(addToCart({ ...product, quantity: quantity, totalPrice, discountedPrice }))
    dispatch(setCartMessage(true))
  }


  const handleImage = (e) => {
    document.querySelector("[name='main']").src = e.target.src;
  }
  return (
    <main className='py-5'>
      <div className='product-single'>
        <div className='container'>
          <div className='product-single-content bg-white grid'>

            <div className='product-single-l'>
              <div className='product-img'>
                <div className='product-img-zoom'>
                  <img name="main" src={product ? (product.images ? product.images[0] : '') : ''} alt="" className='img-cover' />
                </div>

                <div className='product-img-thumbs'>
                  <div className='thumb-item'>
                    <img onClick={handleImage} src={product ? (product.images ? product.images[0] : '') : ''} alt="" />
                  </div>
                  <div className='thumb-item'>
                    <img onClick={handleImage} src={product ? (product.images ? product.images[1] : '') : ''} alt="" />
                  </div>
                  <div className='thumb-item'>
                    <img onClick={handleImage} src={product ? (product.images ? product.images[2] : '') : ''} alt="" />
                  </div>
                  <div className='thumb-item'>
                    <img onClick={handleImage} src={product ? (product.images ? product.images[3] : '') : ''} alt="" />
                  </div>
                  <div className='thumb-item'>
                    <img onClick={handleImage} src={product ? (product.images ? product.images[4] : '') : ''} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className='product-single-r'>
              <div className='product-details'>
                <div className='title fs-20'>{product?.title}</div>
                <div>
                  <p className='pare fw-3 fs-15'>{product?.description}</p>
                </div>
                <div className="info flex align-center flex-wrap fs-14">
                  <div className='rating'>
                    <span className='text-orange'>Rating : </span>
                    <span className='mx-1'>{product?.rating}</span>
                  </div>
                  <div className='vert-line'></div>
                  <div className='brand'>
                    <span className='text-orange fw-5'>Brand : </span>
                    <span className='mx-1'>{product?.brand}</span>
                  </div>
                  <div className='vert-line'></div>
                  <div className='brand'>
                    <span className='text-orange fw-5'>Category : </span>
                    <span className='mx-1'>{product?.category ? product.category.replace("-", " ") : ''}</span>
                  </div>
                </div>

                <div className='price'>
                  <div className='flex align-center'>
                    <div className='old-price'>
                      {formatPrice(product?.price)}
                    </div>
                    <span className='fs-16 mx-2 text-dark'>
                      Inclusive of all taxes
                    </span>
                  </div>

                  <div className='flex align-center'>
                    <div className='new-price fs-26'>
                      {formatPrice(discountedPrice)}
                    </div>
                    <div className="discount">
                      {product?.discountPercentage}% OFF
                    </div>
                  </div>
                </div>

                <div className='qty flex align-center my-4'>
                  <div className='qty-text'>Quantity: </div>
                  <div className='qty-change flex align-center mx-3'>
                    <button className='qty-decrease flex align-center justify-center' onClick={() => decreaseQty()}>
                      <AiOutlineMinus />
                    </button>
                    <div className='qty-value flex align-center justify-center'>{quantity}</div>
                    <button className='qty-increase flex align-center justify-center' onClick={() => increaseQty()}>
                      <AiOutlinePlus />
                    </button>
                  </div>
                  {
                    (product?.stock === 0)
                      ? <div className='qty-error text-uppercase bg-danger text-white fs-12 ls-1 mx-2 fw-5'>Out of stock</div>
                      : ''
                  }
                </div>

                <div className='btns'>
                  <button className='add-to-cart-btn btn' onClick={() => addToCartHandler(product)}>
                    <HiShoppingCart />
                    <span className='btn-text mx-2'>Add To Cart</span>
                  </button>
                  <button className='buy-now btn mx-3'>
                    <span className='btn-text'>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {cartMessageStatue && <CartMessage />}
    </main>
  )
}

export default ProductSinglePage