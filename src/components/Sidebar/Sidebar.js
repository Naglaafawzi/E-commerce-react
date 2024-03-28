import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSidebarStatus, setSidebarOff } from '../../store/sidebarSlice';
import { AiOutlineClose } from "react-icons/ai"
import { Link } from 'react-router-dom';
import "./Sidebar.scss"
import { fetchAsyncCategory, getAllCategories } from '../../store/categorySlice';


const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus)
  const categories = useSelector(getAllCategories)

  useEffect(() => {
    dispatch(fetchAsyncCategory())
  }, [dispatch]);
  return (
    <aside className={`sidebar ${isSidebarOn ? 'hide-sidebar' : ''}`}>
      <button className='sidebar-hide-btn' onClick={() => dispatch(setSidebarOff())}>
        <AiOutlineClose />
      </button>
      <div className="cat-title fs-17 text-uppercase fw-6 ls-1h">
        All Categories
      </div>
      <div className='sidebar-cnt'>
        <ul className='cat-list'>
          {
            categories.map((category, idx) => (
              <li key={idx} onClick={() => dispatch(setSidebarOff())}>
                <Link to={`category/${category}`} className='cat-list-link text-capitalize'>
                  {category.replace("-", " ")}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar