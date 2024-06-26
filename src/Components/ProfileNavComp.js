import React, {useEffect, useState} from 'react';
import { history } from '../history';
import {useDispatch, useSelector} from 'react-redux';
import './Profile/Profile.css'
import cookie from 'js-cookie';
import {signout} from '../Actions/authActions';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

function ProfileNavComp(props) 
{
    const userInstance = cookie.get('userInstance');
    const dispatch = useDispatch();
    if(userInstance) {
        const user = JSON.parse(userInstance);
        console.log(userInstance)

        return (   
            <div className="logged-in-profile-navbar">
                <Dropdown className="user-instance">
                    <Dropdown.Toggle id="dropdown-basic">
                        Hello {user.data.user.firstname}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
                        <Dropdown.Item href="/profile">My Orders</Dropdown.Item>
                        
                        <Dropdown.Item href="/" onClick={()=>{dispatch(signout());}}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        );
    }
    else {
        return (
        <div className="login-btns">  
            <form className="form-inline my-2 my-lg-0 sign-home-btn">
                <a href="/Signin" className="btn btn-primary btn-lg active signin-btn" role="button" aria-pressed="true">Sign In</a>
            </form>
            <form className="form-inline my-2 my-lg-0 sign-home-btn">
                <a href="/Signup" className="btn btn-primary btn-lg active signup-btn" role="button" aria-pressed="true">Sign Up</a>
            </form>
        </div>
    );}
}
export default ProfileNavComp;