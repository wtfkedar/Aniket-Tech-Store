import React, {useState} from 'react';
import { history } from '../../history';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import '../../CSS/HomePage.css';
import SecurityIcon from '../../images/SecurityIcon.jpg';
import DeliveryIcon from '../../images/DeliveryIcon.jpg';



const SecondContainer = (props) => {
    return (
        <div className="second-container">
            <div className="row security">
                <div className="col security-icon-col">
                    <img src={SecurityIcon} className="security-icon-left" />
                </div>
                <div className="col security-text">
                    <h2 className="security-title"> We keep your data ssafe </h2>
                    <p className="security-paragraph-right"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet eros et urna pulvinar sodales. Sed gravida erat vel arcu elementum elementum. Phasellus pretium urna lacus, elementum mattis ipsum varius ac. Aliquam id tincidunt dolor, malesuada euismod enim. Morbi vitae leo lobortis, lobortis elit a, tincidunt ex. Duis pharetra turpis in nunc mollis mattis vel vel mi. </p>
                </div>
            </div>
            <div className="row security bottom">
                <div className="col security-text">
                    <h2 className="security-title-left"> We guarantee the fastest delivery </h2>
                    <p className="security-paragraph-left"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet eros et urna pulvinar sodales. Sed gravida erat vel arcu elementum elementum. Phasellus pretium urna lacus, elementum mattis ipsum varius ac. Aliquam id tincidunt dolor, malesuada euismod enim. Morbi vitae leo lobortis, lobortis elit a, tincidunt ex. Duis pharetra turpis in nunc mollis mattis vel vel mi. </p>
                </div>
                <div className="col security-icon-col">
                    <img src={DeliveryIcon} className="security-icon-right" />
                </div>
            </div>
        </div>
    )
}
export default SecondContainer;