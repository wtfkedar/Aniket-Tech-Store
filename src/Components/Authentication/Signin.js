import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signin} from '../../Actions/authActions';
import '../../CSS/SignIn.css';
import ReCAPTCHA from "react-google-recaptcha";
import {useHistory} from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import signinimg from '../../images/gadgets-signin.jpg'
function SigninComponent(props) 
{
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [value, setValue] = useState("[empty]");
    const [expired, setExpired] = useState("false");
    const dispatch = useDispatch();
    const errorFromServer = useSelector(state=>state.error);
    const recaptchaRef = React.createRef();
    let history = useHistory();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(ValidateEmail(Email.toLowerCase()) && checkPwd(password)){ /*RECAPTCHA    && value != "[empty]"   RECAPTCHA*/
            dispatch(signin(Email.toLowerCase(), password));
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
                                    Email and\or password are incorrect!
                                </Alert>
                            } 
                            <p id="title">Login</p>
                            <div className="email-field">
                                <div className="webflow-style-input-transparent">
                                    <input className="" type="email" placeholder="Email Address" required onChange = {(e) => setEmail(e.target.value)}></input>
                                    <button type="submit"><i className="icon ion-android-arrow-forward"></i></button>
                                    <div className="inner-grad-1"> </div>
                                </div>
                            </div>
                            <div className="password-field">
                                <div className="webflow-style-input-transparent">
                                    <input className="" type="password" placeholder="Password" required onChange = {(e) => setPassword(e.target.value)}></input>
                                    <button type="submit"><i className="icon ion-android-arrow-forward"></i></button>
                                    <div className="inner-grad-1"> </div>
                                </div>
                            </div>
                            <div className="row">
                                <a id="forgot" href="/ForgotPass">Forgot password?</a>
                            </div>
                            <div className="row">
                                <button className="home-btn signin-custom-btn" type="submit">Sign-In</button>
                            </div>
                            <div className="row">
                                <div className="need-acc-txt"> 
                                    Need an account? <a href="/SignUp">Sign-Up</a> </div>
                                </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default SigninComponent;
/*                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn"
                                onChange={onChange}
                            />
                            */