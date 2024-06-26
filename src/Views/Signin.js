import React, {Component} from 'react';
import '../CSS/HomePage.css'
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';
import SigninComponent from '../Components/Authentication/Signin';
class Signin extends Component 
{
	render() 
    {
		return (
			<div className="signin-container">
				<div className="blur-bg">
					<NavBar bg="custom"/>
					<SigninComponent />
					<Footer />
				</div>
			</div>
		)
	}
}
export default Signin;