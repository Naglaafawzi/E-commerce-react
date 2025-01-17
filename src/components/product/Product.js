import React from 'react'
import { Link } from 'react-router-dom'
import "./Product.scss"
import { formatPrice } from '../../utils/helpers'

const Product = ({ product }) => {
    return (
        <Link to={`/product/${product?.id}`} key={product?.id} className='text-center'>
            <div className='category'>{product?.category}</div>
            <div className='product-item-img'>
                <img className='img-cover' src={product?.images[0]} alt={product.title} />
            </div>
            <div className='product-item-info fs-14'>
                <div className='brand'>
                    <span>Brand : </span>
                    <span className='fw-7'> {product?.brand}</span>
                </div>
            </div>
            <div className='title py-2'>
                {product?.title}
            </div>
            <div className='price flex align-center justify-center'>
                <span className='old-price'>{product?.price}</span>
                <span className='new-price'>{formatPrice(product?.discountedPrice)}</span>
                <span className='discount fw-6'>{product?.discountedPercentage}(% Off)</span>
            </div>
        </Link>
    )
}

export default Product