import React, { useEffect, useState ,useReducer } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';
import { history } from '../history';
import '../CSS/HomePage-mobile.css';
import '../CSS/HomePage.css';
import '../CSS/Homepage/SubscribeInput.css';
import QuantityRow from './Homepage/HomeQuantityRow';
const reducer = (state, action) => {
  switch(action.type) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
}
function HomePage(props) 
{
    const [phones, setPhones] = useReducer(reducer, 0);
    const [laptops, setlaptops] = useReducer(reducer, 0);
    const [appliances, setappliances] = useReducer(reducer, 0);
    const [egames, setegames] = useReducer(reducer, 0);
    const [progress, setProgress] = useReducer(reducer, 0);
    useEffect(() => {
        let interval;
        interval = setInterval(() => {
            if(phones < 300) setPhones({type: "increment"});
            if(laptops < 1284) setlaptops({type: "increment"});
            if(appliances < 2049) setappliances({type: "increment"});
            if(egames < 421) setegames({type: "increment"});
        }, progress/2000);
        return () => {
            clearInterval(interval);
        }
    })
    return (
        <div className="HomePage-Container">
            <div className="main-title">
                <h1 className="main-title-h1"> All The Technology <br />You'll Ever Need </h1>
                <h2 className="main-title-h2"> In one place. </h2>
                {QuantityRow(phones, laptops, appliances,egames)}
                <div className="sign-home-btn home-shopnow-btn">
                    <button onClick={() => history.push('/store')} className="btn btn-primary btn-lg active home-btn" role="button" aria-pressed="true">Shop Now ></button>
                </div>
            </div>
        </div>
    );
}
export default HomePage;