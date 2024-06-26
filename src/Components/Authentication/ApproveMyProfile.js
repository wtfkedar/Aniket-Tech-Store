import React, {useEffect, useState} from 'react';
import history from '../../history';
import {useDispatch, useSelector} from 'react-redux';
import '../../CSS/SignIn.css'
import {approveUser} from '../../Actions/authActions';

function ApproveMyProfile(props) 
{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(approveUser(props.userid, props.token));
    });
    return (   
        <>
            <p id="title">Your account has been approved successfully!</p>
        </> 
    );
}
export default ApproveMyProfile;