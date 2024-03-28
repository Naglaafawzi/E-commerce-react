import React, { useEffect } from 'react'
import "./SearchPage.scss"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearSearch, fetchAsyncSearchProduct, getSearchProducts, getSearchProductsStatus } from '../../store/searchSlice'
import { STATUS } from '../../utils/status'
import Loader from "../../components/Loader/Loader"
import ProductList from "../../components/productList/ProductList"
import SearchNotFound from './SearchNotFound'

const SearchPage = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const searchProducts = useSelector(getSearchProducts)
  const searchProductsStatus = useSelector(getSearchProductsStatus)

  useEffect(() => {
    dispatch(clearSearch())
    dispatch(fetchAsyncSearchProduct(searchTerm))
  }, [dispatch, searchTerm]);

  if (searchProducts.length === 0) {
    return <SearchNotFound />
  }
  return (
    <main>
      <div className='search-content bg-whitesmoke'>
        <div className='container'>
          <div className='py-5'>
            <div className='title-md'>
              <h3>Search Results:</h3>
            </div>
            <br />
            {
              searchProductsStatus === STATUS.LOADING
                ? <Loader />
                : <ProductList products={searchProducts} />
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default SearchPage