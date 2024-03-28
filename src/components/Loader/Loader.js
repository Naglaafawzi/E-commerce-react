import React from 'react'
import "./Loader.scss"
import { loader } from "../../utils/images"
import img1 from "../../assets/images/leader.gif"

const Loader = () => {
    return (
        <div className='container'>
            <div className='loader flex justify-center align-center'>
                <img src={img1} alt="" />
            </div>
        </div>
    )
}

export default Loader