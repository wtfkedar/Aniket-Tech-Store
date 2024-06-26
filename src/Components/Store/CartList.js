import React, {Component} from 'react';
import CartImage from '../../images/cart.png';
import '../../CSS/Store.css';



export default function CartList() {
    return (
        <div className="categories-btn-col dropdown">
            <a href="#" id="dropdown-categories">
                <img src={CartImage} className="category-cart-icon" />
                <h5 className="categories-title"> 4 items </h5>
                <span className="dropdown-mask"></span>
            </a>
            <div class="dropdown-content">
                <div className="row dropdown-cart-items">
                    <div className="row dropdown-cart-item">
                        <h6 className="item-name"> Item Name </h6>
                        <h6 className="item-price"> 250$ </h6>
                    </div>
                    <div className="row dropdown-cart-item">
                        <h6 className="item-name"> Item Name </h6>
                        <h6 className="item-price"> 250$ </h6>
                    </div>                            
                    <div className="row dropdown-cart-item">
                        <h6 className="item-name"> Item Name </h6>
                        <h6 className="item-price"> 250$ </h6>
                    </div>                            
                    <div className="row dropdown-cart-item">
                        <h6 className="item-name"> Item Name </h6>
                        <h6 className="item-price"> 250$ </h6>
                    </div>
                </div>
                <div className="row dropdown-cart-sum"> 
                    <h6 className="item-name"> Total:  </h6>
                    <h6 className="item-price"> 250$ </h6>
                </div>
            </div>
        </div>  
    )
}