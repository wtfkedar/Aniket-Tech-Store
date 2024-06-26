import React, { useEffect, useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { fetchBestSellers } from '../../Actions/generalActions'
import '../../CSS/Store.css'
import dell from '../../images/bestseller-dell.webp'
import iphone from '../../images/bestseller-iphone.jpg'
import casio from '../../images/bestseller-casio.png'
import nintendo from '../../images/bestseller-nintendo.png'
import siemens from '../../images/bestseller-siemens.png'
import useWindowDimensions from '../../Hooks/useWindowDimensions'
import { Swiper, SwiperSlide } from 'swiper/react'
import Axios from 'axios'
import 'swiper/swiper.min.css'

const fetchImageFromAWS = async (productId, ext) => {
  try {
    const response = await fetch(
      'https://cloud-cube-us2.s3.amazonaws.com/t09vuh9fptce/public/products/' +
        productId +
        ext
    )
    if (response.status === 200)
      return (
        'https://cloud-cube-us2.s3.amazonaws.com/t09vuh9fptce/public/products/' +
        productId +
        ext
      )
    else if (ext === '.png') return fetchImageFromAWS(productId, '.jpg')
    return response
  } catch (err) {
    console.log(err)
    return fetchImageFromAWS(productId, '.jpg')
  }
}

function BestSellerBar (props) {
  const [ProductList, setProductList] = useState([''])
  const { height, width } = useWindowDimensions()

  useEffect(() => {
    if (ProductList.length <= 1) fetchBestSellerList()
  }, [ProductList.length])

  async function fetchBestSellerList () {
    return await Axios.get(
      'https://techstore1.herokuapp.com/products/getbestsellers'
    )
      .then(async function (response) {
        if (response.data) {
          for (const element of response.data) {
            let ImgUrl = await fetchImageFromAWS(element.productid, '.png')
            element.imgurl = ImgUrl
          }
          setProductList(response.data)
        } else {
        }
      })
      .catch(function (error) {})
  }

  function renderProductList () {
    if (ProductList.length > 1) {
      return ProductList.map(function (product) {
        return (
            <div className="col best-seller-col">
                <a
                    href={'/store/product/' + product.productid}
                    className='best-seller-col animate-scale-hover'
                >
                    <img src={product.imgurl} className='bestseller-img' />
                    <h4 className='bestseller-title-product'>
                    {' '}
                    {product.product.producttitle}{' '}
                    </h4>
                    <h5 className='bestseller-price'> {product.product.price}$ </h5>
                </a>
                <button className="add-to-cart-btn">Add to Cart</button>

            </div>
        )
      })
    }
    return
  }

  const renderProductListMobile = () => {
    if (ProductList.length > 1) {
      return ProductList.map(function (product) {
        return (
          <SwiperSlide>
            <a href={'/store/product/' + product.productid}>
              <img src={product.imgurl} className='bestseller-img' />
              <h4 className='bestseller-title-product'>
                {' '}
                {product.product.producttitle}{' '}
              </h4>
              <h5 className='bestseller-price'> {product.product.price}$ </h5>
            </a>
          </SwiperSlide>
        )
      })
    }
    return
  }

  if (width >= 768)
    return (
      <div>
        <h2 className='bestseller-title'>Best Sellers</h2>
        <div className='row best-seller-container'>{renderProductList()}</div>
      </div>
    )
  else {
    return (
      <>
        <h2 className='bestseller-title'>Best Sellers</h2>
        <Swiper
          spaceBetween={15}
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
          centeredSlides={true}
          pagination={{
            clickable: true
          }}
        >
          {renderProductListMobile()}
        </Swiper>
      </>
    )
  }
}
export default BestSellerBar
