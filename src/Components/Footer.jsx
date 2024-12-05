import React from "react";
import logo from "../StaticMedia/TheGuyLogo.png";

function Footer()
{
    return(
        <div className="bg-dark p-4 flex-row-wrap align-items-center center-items">

            <div className="col-12 col-md-4">
                <h4>123 Plaeground Stret</h4>
                <h4>Los Santos, GTA 12345</h4>
                <h4>123-456-7890</h4>
            </div>

            <img className="mt-4 mb-4 col-6 col-md-2" src={logo} alt="logo"/>

            <div className="col-12 col-md-4">
                
                <h3>Monday - Thursday</h3>
                <p>11am - 9pm</p>

                <h3>Friday - Saturday</h3>
                <p>12pm - 12am</p>

                <h3>Sunday</h3>
                <p>5pm - 10pm</p>
            </div>
        </div>
    );
}

export default Footer;