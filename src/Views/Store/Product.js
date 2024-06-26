import React, {Component} from 'react';
import '../../CSS/HomePage.css'
import NavBar from '../../Components/Navbar';
import Product from '../../Components/Store/Product';
import Footer from '../../Components/Footer';
import CategoryBar from '../../Components/Store/CategoryBar';

class ProductView extends Component 
{
	render() 
    {
		return (
			<div className="homepage-container">
                <NavBar bg="custom"/>
				<CategoryBar />
                <Product productId={this.props.match.params.productId} />
				{Footer()}
			</div>
		)
	}
}
export default ProductView;