import React, {Component} from 'react';
import '../CSS/HomePage.css'
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';
import SignupComponent from '../Components/Authentication/Signup';
class Signup extends Component 
{
	render() 
    {
		return (
			<div className="signin-container">
				<div className="blur-bg">
					<NavBar bg="custom"/>
					<SignupComponent />
					<Footer />
				</div>
			</div>
		)
	}
}
export default Signup;