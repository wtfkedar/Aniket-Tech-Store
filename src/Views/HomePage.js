import React, {Component} from 'react';
import '../CSS/HomePage.css'
import NavBar from '../Components/Navbar';
import HomePage from '../Components/HomePage';
import SecondContainer from '../Components/Homepage/SecondContainer';
import Footer from '../Components/Footer';
import useWindowDimensions from '../Hooks/useWindowDimensions';
import phones from '../images/phones.jpg';
import laptops from '../images/laptops.png';
import egames from '../images/egames.jpg';
import appliances from '../images/appliances.jpg';
const SalesImage = (image, paragraph, position) => {
    let pos = String(position);
    let paragraphTxt = String(paragraph);
    return (
        <div className="col sales-col">
            <img className="sales-img-1" src={image} />
            <div className={"sales-info "+pos}>
                <p className={"sales-paragraph"}> {paragraphTxt} </p>
                <a href="/Signin" className={"btn btn-primary btn-lg active signin-btn sales-btn"} role="button" aria-pressed="true">Shop Now...</a>
            </div>
        </div>
    )
}
const RenderSalesSection = () => {
    const { height, width } = useWindowDimensions();
    if(width >= 768){
        return (
            <div className="row sales">
                <div className="row sales-row">
                    {SalesImage(phones, "The best smartphones, from the best brands, in the best prices.", "top-left")}
                    {SalesImage(laptops, "Get yourself a new work station for your home and business, from the top global brands", "top-right")}
                </div>
                <div className="row sales-row">
                    {SalesImage(egames, "Games are life. Get yourself and your children a new way to pass the day !", "bottom-left")}
                    {SalesImage(appliances, "The richest variety of home appliances in the world ! Best prices and longest warranty periods. period !", "bottom-right")}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="row sales mobilesales">
                {SalesImage(phones, "The best smartphones, from the best brands, in the best prices.", "top-left")}
                {SalesImage(laptops, "Get yourself a new work station for your home and business, from the top global brands", "top-right")}
                {SalesImage(egames, "Games are life. Get yourself and your children a new way to pass the day !", "bottom-left")}
                {SalesImage(appliances, "The richest variety of home appliances in the world ! Best prices and longest warranty periods. period !", "bottom-right")}
            </div>
        )
    }
}
class HomePageView extends Component 
{
	render() 
    {
		return (
			<div className="homepage-container">
				<div className="first-container">
					<NavBar/>
					<HomePage />
				</div>
				<SecondContainer />
				<RenderSalesSection />
				{Footer()}
			</div>
		)
	}
}
export default HomePageView;