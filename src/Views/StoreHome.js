import React, {Component} from 'react';
import '../CSS/HomePage.css'
import NavBar from '../Components/Navbar';
import StoreHome from '../Components/Store/StoreHome';
import Footer from '../Components/Footer';

class StoreHomeView extends Component 
{
	render() 
    {
		return (
			<div className="homepage-container">
                <NavBar bg="custom"/>
                <StoreHome />
				{Footer()}
			</div>
		)
	}
}
export default StoreHomeView;