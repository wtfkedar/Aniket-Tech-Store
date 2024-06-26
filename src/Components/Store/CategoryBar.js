import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../../CSS/Store.css';
import CategoryImage from '../../images/categories.png';
import Dropdown from 'react-bootstrap/Dropdown'
import {IoArrowForward} from 'react-icons/io5';
import CartList from './CartList';

function SearchBar() {
    return (
    <div className="store-search-container">
        <div className="webflow-style-input-transparent-search">
            <input className="" type="password" placeholder="I Want to buy..." required ></input>
            <button type="submit">
                <IoArrowForward />
            </button>
            <div className="inner-grad"> </div>
        </div>
    </div>
    )
}
function CategoryList() {
    return (
        <div className="categories-btn-col dropdown">
            <a href="#" id="dropdown-categories">
                <img src={CategoryImage} className="category-menu-icon" />
                Categories
                <span className="dropdown-mask"></span>
            </a>
            <div class="dropdown-content">
                <a href="#">Computers and Gadgets</a>
                <a href="#">Home Appliances</a>
                <a href="#">Smartphones</a>
                <a href="#">Sports</a>
                <a href="#">Office Furniture</a>
                <a href="#">Sound and Music</a>
            </div>
        </div>
    )
}

class CategoryBar extends Component 
{
    constructor(props){
        super(props);
    }
	render() {
		return (
            <div className="category-nav-bar-container">
                <SearchBar />
                <CategoryList />
                <CartList />
            </div>
		)
	}
}
export default CategoryBar;