import React, { useEffect, useState ,useReducer } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';
import history from '../../history';
import '../../CSS/HomePage.css';
import '../../CSS/Store.css';
import '../../CSS/Homepage/SubscribeInput.css';
import CategoryBar from './CategoryBar';
import BestSellerBar from './BestSellerBar';
import FeaturedProducts from './FeaturedProducts';

import {IoArrowForward} from 'react-icons/io5';

function StoreHome(props) 
{

    return (
        <div className="store-container">
            <CategoryBar />
            <BestSellerBar />
            <FeaturedProducts />
        </div>
    );
}
export default StoreHome;