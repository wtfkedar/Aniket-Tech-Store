import React,{ useEffect, useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../../CSS/Store.css';
import kettle from '../../images/kettle.jpg';
import kitcheaid from '../../images/KitchenAid.jpg';
import samsung810 from '../../images/samsung810.png';
import samsungoven from '../../images/samsungoven.jpg';
import pasta from '../../images/pasta.webp';
import useWindowDimensions from '../../Hooks/useWindowDimensions';

function FeaturedProducts(props)
{
    useEffect(() => {

    });
    const { height, width } = useWindowDimensions();

    if(width >= 768){
        return (
            <div>
                <h2 className="featured-products-title" >Featured products </h2>
                <div className="featured-products">
                    <div className="row featured-products-container">
                        <div className="col featured-products-col">
                            <img src={kitcheaid} className="featured-products-img" />
                            <h4 className="featured-products-title"> KitchenAid Food Processor </h4>
                            <h5 className="featured-products-price"> 790$ </h5>

                        </div>
                        <div className="col featured-products-col">
                            <img src={samsung810} className="featured-products-img" />
                            <h4 className="featured-products-title"> Samsung Refrigerator </h4>
                            <h5 className="featured-products-price"> 3399$ </h5>
                        </div>
                        <div className="col featured-products-col">
                            <img src={kettle} className="featured-products-img" />
                            <h4 className="featured-products-title"> Lauben Kettle </h4>
                            <h5 className="featured-products-price"> 120$ </h5>
                        </div>
                    </div>
                    <div className="row featured-products-container">
                        <div className="col featured-products-col">
                            <img src={kettle} className="featured-products-img" />
                            <h4 className="featured-products-title"> Lauben Kettle </h4>
                            <h5 className="featured-products-price"> 120$ </h5>
                        </div>
                        <div className="col featured-products-col">
                            <img src={samsungoven} className="featured-products-img" />
                            <h4 className="featured-products-title"> Samsung Microwave </h4>
                            <h5 className="featured-products-price"> 299$ </h5>
                        </div>
                        <div className="col featured-products-col">
                            <img src={pasta} className="featured-products-img" />
                            <h4 className="featured-products-title"> Pasta Machine </h4>
                            <h5 className="featured-products-price"> 320$ </h5>
                        </div>
                    </div>            
                    <h5 className="showmore-title"> Show More... </h5>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h2 className="featured-products-title" >Featured products </h2>
                <div className="featured-products">
                    <div className="row featured-products-container">
                        <div className="col featured-products-col">
                            <img src={kitcheaid} className="featured-products-img" />
                            <h4 className="featured-products-product-title"> KitchenAid Food Processor </h4>
                            <h5 className="featured-products-price"> 790$ </h5>
                        </div>
                        <div className="col featured-products-col">
                            <img src={samsung810} className="featured-products-img" />
                            <h4 className="featured-products-product-title"> Samsung Refrigerator </h4>
                            <h5 className="featured-products-price"> 3399$ </h5>
                        </div>
                    </div>
                    <div className="row featured-products-container">
                        <div className="col featured-products-col">
                            <img src={kettle} className="featured-products-img" />
                            <h4 className="featured-products-product-title"> Lauben Kettle </h4>
                            <h5 className="featured-products-price"> 120$ </h5>
                        </div>
                        <div className="col featured-products-col">
                            <img src={samsungoven} className="featured-products-img" />
                            <h4 className="featured-products-product-title"> Samsung Microwave </h4>
                            <h5 className="featured-products-price"> 299$ </h5>
                        </div>
                    </div>           
                    <div className="row featured-products-container">
                        <div className="col featured-products-col">
                            <img src={samsungoven} className="featured-products-img" />
                            <h4 className="featured-products-product-title"> Samsung Microwave </h4>
                            <h5 className="featured-products-price"> 299$ </h5>
                        </div>
                        <div className="col featured-products-col">
                            <img src={pasta} className="featured-products-img" />
                            <h4 className="featured-products-product-title"> Pasta Machine </h4>
                            <h5 className="featured-products-price"> 320$ </h5>
                        </div>
                    </div>       
                    <h5 className="showmore-title"> Show More... </h5>
                </div>
            </div>
        )
    }
    
}
export default FeaturedProducts;