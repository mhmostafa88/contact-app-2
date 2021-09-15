import React from "react";
import { Link } from 'react-router-dom';
import user from '../images/user.png';


const ContactCard = (props) => {

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">Mahmoud</div>
                    <div className="description">mahmoud@codinghub.com</div>
                </div>
            </div>
        </div>
    );

}

export default ContactCard;
