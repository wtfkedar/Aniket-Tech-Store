import React, {useState} from 'react';
import { history } from '../history';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import '../CSS/HomePage.css';
import '../CSS/Homepage/SubscribeInput.css';
import {IoArrowForward} from 'react-icons/io5';
import {SiFacebook} from 'react-icons/si';
import {SiInstagram} from 'react-icons/si';
import {SiTwitter} from 'react-icons/si';
import {GrGooglePlus} from 'react-icons/gr';
import {SiLinkedin} from 'react-icons/si';
import {IconContext} from "react-icons";
import worldmap from '../images/worldmap.png';
import abdevlogo from '../images/abdev.png';
function footer(props) 
{
   
    return (
        <div className="third-container">
            <div className="row footer-row">
                <div className="blur-bg-footer">
                    <div className="col subscribe-col">       
                        <h5 className="subscribe-ttl"> Subscribe to our Newsletter</h5>         
                        <div class="webflow-style-input">
                            <div className="inner-grad up"> </div>
                            <input class="" type="email" placeholder="What's your email?"></input>
                            <button type="submit">
                            <IoArrowForward />
                            </button>
                            <div className="inner-grad"> </div>
                        </div>
                    </div>
                    <div className="col sitemap-col"> 
                        <h5 className="subscribe-ttl"> Sitemap </h5>         
                        <h6 className="sitemap-row"> Sales </h6>
                        <h6 className="sitemap-row"> Why Us? </h6>
                        <h6 className="sitemap-row"> Contact Us </h6>
                        <h6 className="sitemap-row"> About </h6>
                    </div>
                    <div className="col ">
                        <div className="row contact-icon-col">
                        <IconContext.Provider value={{className: "contact-icon-footer"}}><SiFacebook /></IconContext.Provider>
                        <IconContext.Provider value={{className: "contact-icon-footer"}}><SiInstagram /></IconContext.Provider>
                        <IconContext.Provider value={{className: "contact-icon-footer"}}><SiTwitter /></IconContext.Provider>
                        <IconContext.Provider value={{className: "contact-icon-footer"}}><GrGooglePlus /></IconContext.Provider>
                        <IconContext.Provider value={{className: "contact-icon-footer"}}><SiLinkedin /></IconContext.Provider>
                        </div>
                        <div className="row footer-address-container">
                            <h6 className="footer-address"> TechStore inc. </h6>
                            <h6 className="footer-address"> Lorem Ipsum Blvd. 1234 </h6>
                            <h6 className="footer-address"> Dolor Town, Sit Amet County </h6>
                            <h6 className="footer-address"> Haifa, Israel 1700081 </h6>
                            <a href="http://github.com/alonilk2" className="abdev-link"><img src={abdevlogo} className="abdev-logo" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default footer;