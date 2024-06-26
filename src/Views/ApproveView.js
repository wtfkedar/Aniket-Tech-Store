import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../Components/Navbar';
import ApproveMyProfile from '../Components/Authentication/ApproveMyProfile';

class ApproveView extends Component 
{
    render() 
    {
		return (
			<div>
				<NavBar />
				<ApproveMyProfile userid={this.props.match.params.userid} token={this.props.match.params.token} />
			</div>
		)
	}
}
export default ApproveView;