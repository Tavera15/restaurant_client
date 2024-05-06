import React from "react";
import restVideo from "../../StaticMedia/RestVideo1.mp4";
import logo from "../../StaticMedia/TheGuyLogo.png";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage()
{
    return(
        <div className=" p-0" >
            <div className="welcome">
                <div className="video-overlays">
                    <img className="welcome-logo" alt="welcome-logo" src={logo} />
                </div>

                <video src={restVideo} className="rest_video" autoPlay muted loop>

                </video>
            </div>

            <div className="container p-4 col-12 col-md-7 about-us">
                <h1 className="mb-4">THE GUY'S RESTAURANTS IN HUMBLE AREA & PEARLAND TX</h1>
                <hr/>
                <p>The popular Italiano's Restaurant, known across the Houston area for serving delicious, authentic Italian food, is the go-to place for an affordable dinner or lunch in Humble, Atascocita, Kingwood and Pearland TX.  Whether you want to dine in, order take-out, or find the best Italian catering in the Houston area, you are in for a treat!</p>
                <p>As you open the door, you are greeted with the aroma of garlic, olive oil, and steaming tomatoes from our homemade marinara and tomato sauce lovingly made with the freshest of vegetables.</p>
                <p>Once you take a bite of our complimentary homemade garlic rolls, your taste buds will come alive and you’ll know you are in for a wonderful meal.</p>
                <p>At Italiano’s, our excellent staff are always welcoming, personable, and go the extra mile to ensure your visit is an enjoyable pleasure you’ll want to repeat and tell others about.</p>
            </div>

            <div className="menu-section">
                <div className="shader p-4 inner-menu-section">
                    <h4 className="mb-4">We offer an outstanding selection of Italian cuisine, fine wines and specialty cocktails since 1986.</h4>
                    <Link className="btn btn-light menu-btn">View Our Menu</Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage