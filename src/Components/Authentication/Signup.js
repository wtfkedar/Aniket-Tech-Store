import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signup} from '../../Actions/authActions';
import '../../CSS/SignIn.css';
import ReCAPTCHA from "react-google-recaptcha";
import {useHistory} from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import signinimg from '../../images/gadgets-signin.jpg'
function SignupComponent(props) 
{
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [value, setValue] = useState("[empty]");
    const [expired, setExpired] = useState("false");
    const [password1, setPassword1] = useState('');
    const [firstname, setFirstName] = useState("[empty]");
    const [lastname, setLastName] = useState("false");

    const dispatch = useDispatch();
    const errorFromServer = useSelector(state=>state.error);
    const recaptchaRef = React.createRef();
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(password !== password1){
            alert("Passwords don't match ! Please reenter your password.");
            return false;
        }
        if(ValidateEmail(Email.toLowerCase()) && checkPwd(password)){ 
            dispatch(signup(Email.toLowerCase(), password, firstname, lastname));
        }
        else {
            alert("You have to verify the Recaptcha !");
            return (false);
        }
    }
    function ValidateEmail(mail) 
    {
        if (/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(mail))
            return true;
        else if (/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z0-9-]+)$/.test(mail))
            return true;
		alert("You have entered an invalid email address!");
		return false;
	}
    function checkPwd(str) 
    {
        if (str.length < 6){
			alert("Too short");
            return false;
        }

		else if (str.search(/\d/) === -1){
			alert("No num");
            return false;
        }
		else if (str.search(/[a-zA-Z]/) === -1){
			alert("no chars");
            return false;
        }
		return true;
	}
    function onChange(value) {
        console.log("Captcha value:", value);
        setValue(value);
        if(value == null) setExpired(true);
    }
    return (   
        <div>
            <div id="SignIncontainer">
                <div className= "row justify-content-center">
                    <div id="SignIn">
                        <div className="col signin-image" >
                            <img src={signinimg} className="signin-image-bg" />
                        </div>
                        <form onSubmit={handleSubmit} className="signin-form" autocomplete="on">
                            {
                                errorFromServer === 0 &&
                                <Alert variant="danger">
                                    An error occured while trying to register your account.
                                    Please make sure that your email address isn't already registered and try again.
                                </Alert>
                            } 
                            <p id="title">Signup</p>
                            <div className="webflow-style-input-transparent">
                                <input id="Firstname" type="text" required onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter Firstname" aria-label="Fullname" aria-describedby="basic-addon1"></input>
                                <div className="inner-grad-1"> </div>
                            </div>
                            <div className="webflow-style-input-transparent">
                                <input id="Lastname" type="text" required onChange={(e)=>setLastName(e.target.value)} placeholder="Enter Lastname" aria-label="Lastname" aria-describedby="basic-addon1"></input>
                                <div className="inner-grad-1"> </div>
                            </div>
                            <div className="webflow-style-input-transparent">

                                <input id="email" type="text" required onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" aria-label="user name or email" aria-describedby="basic-addon1"></input>
                                <div className="invalid-feedback">
                                    Please choose a email.
                                </div>
                                <div className="inner-grad-1"> </div>
                            </div>
                            <div className="webflow-style-input-transparent">
                                <input id="password" type="password" required onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" aria-label="password:" aria-describedby="basic-addon2"></input>
                                <div className="invalid-feedback">
                                    Please enter your password.
                                </div>
                                <div className="inner-grad-1"> </div>
                            </div>
                            <div className="webflow-style-input-transparent">
                                <input id="password1" type="password" required onChange={(e)=>setPassword1(e.target.value)} placeholder="Enter Password Again" aria-label="password:" aria-describedby="basic-addon2"></input>
                                <div className="invalid-feedback">
                                    Please enter your password.
                                </div>
                                <div className="inner-grad-1"></div>                                
                            </div>
                            <div className="row">
                                <button className="home-btn signin-custom-btn" type="submit">Sign Up</button>
                            </div>
                            <div className="row">
                                <div className="need-acc-txt"> 
                                    Already have an account ? <a href="/Signin">Sign In</a> </div>
                                </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default SignupComponent;