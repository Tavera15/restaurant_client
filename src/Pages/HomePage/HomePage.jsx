import React from "react";
import { Carousel } from "react-bootstrap";
import restVideo from "../../StaticMedia/RestVideo1.mp4";
import logo from "../../StaticMedia/TheGuyLogo.png";
import "./HomePage.css";
import { Link } from "react-router-dom";
import MainNavBar from "../../Components/MainNavBar";
import about_plate from "../../StaticMedia/about_plate.png"
import lasagna from "../../StaticMedia/lasagna.png";
import MusicCard from "../../Components/MusicCard";


function HomePage()
{
    return(
        <div className="" >
            <MainNavBar />
            <div className="welcome">
                <div className="video-overlays">
                    <img className="welcome-logo" alt="welcome-logo" src={logo} />
                </div>

                <video src={restVideo} className="rest_video" autoPlay muted loop />
            </div>

            <div className="p-4 col-12 d-flex col flex-wrap align-items-center justify-content-end about-us" >
                <div className="col-12 col-sm-6 p-4 border-top border-bottom border-success border-4">
                    <h1 className="mb-4">THE GUY'S RESTAURANTS IN HUMBLE AREA & PEARLAND TX</h1>
                    <hr/>
                    <h5 className="fs-6">The popular Italiano's Restaurant, known across the Houston area for serving delicious, authentic Italian food, is the go-to place for an affordable dinner or lunch in Humble, Atascocita, Kingwood and Pearland TX.  Whether you want to dine in, order take-out, or find the best Italian catering in the Houston area, you are in for a treat!</h5>
                </div>
                <img src={about_plate} className="col-12 col-sm-3" alt="about-plate"/>
                <img src={lasagna} className="col-12 col-sm-3" alt="about-plate2"/>
            </div>

            <div className="menu-section">
                <div className="p-4 col-12 d-flex col flex-wrap align-items-center justify-content-end about-us">
                    <div className="col-12 col-sm-6 p-0 mb-4 d-block">
                        <Carousel className="col-12 m-0">
                            <Carousel.Item className="carouselItem">
                                <img src= "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/prlmzhet/8953a0a0-3527-4312-b5ea-db8c0c3c4e17.jpg"
                                alt="fav1" className="col-12" 
                                style={{
                                    "height": "30rem",
                                    "objectFit": "cover"}}/>
                            </Carousel.Item>
                            <Carousel.Item className="carouselItem">
                                <img src= "https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/lasagna-1702481392.jpg"
                                alt="fav1" className="col-12" 
                                style={{
                                    "height": "30rem",
                                    "objectFit": "cover"}}/>
                            </Carousel.Item>
                            

                        </Carousel>
                    </div>

                    <div className="col-12 col-sm-6 p-4 border-top border-bottom border-danger border-4">
                        <h2>We offer an outstanding selection of Italian cuisine, fine wines and specialty cocktails since 1986.</h2>
                        <Link className="btn btn-lg btn-light menu-btn">View Our Menu</Link>
                    </div>
                </div>
            </div>

            <div className="menu-section" style={{"backgroundImage": "url(https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"}}>
                <div className="p-4 shader">

                    <h1 className="display-1">Live Performances</h1>
                    <hr />
                    <div className="container flex-row-wrap center-items">
                        <MusicCard
                            performer="SiM"
                            date="May 10"
                            img="https://static.animecorner.me/2022/02/SiM_ArtistPhotos-1.jpg"/>

                        <MusicCard 
                            performer="Lilypichu"
                            date="May 11"
                            img="https://cdn-images.dzcdn.net/images/cover/6b2f8b3ff0e6cd136e685afa2940fcba/0x1900-000000-80-0-0.jpg"/>
                        
                        <MusicCard
                            performer="Los Angeles Azules"
                            date="May 24"
                            img="https://i.scdn.co/image/ab67616d00001e02b017ddd6dc1835dcb15c9e3b"/>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="p-4 inner-menu-section">
                    <h1 className="mb-2">Experience the Food as Never Before</h1>
                    <h3 className="mb-2">Come Dine at The Guy's</h3>                    
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default HomePage