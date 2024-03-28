import React from 'react'
import img from "../../assets/images/search.jpg"

const SearchNotFound = () => {
    return (
        <div className='container my-5'>
            <div className='empty-cart flex justify-center align-center flex-column'>
                <img src={img} alt="" />
                <span className='fw-6 fs-15 text-gray'>
                    Your Search Is Not Found.
                </span>
            </div>
        </div>
    )
}

export default SearchNotFound