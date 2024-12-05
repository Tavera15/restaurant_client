import React, {useEffect, useState} from "react";
import { Offcanvas, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../StaticMedia/TheGuyLogo.png";
import axios from "axios";

function MenuNav({filter})
{
    const [show, setShow] = useState(false);
    const [categories, setCategories] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get(import.meta.env.VITE_SERVER_API + "/Category/")
        .then((res) => setCategories(res.data));
    },[])

    return(
        <>
            <svg className="d-sm-none bi bi-list mt-2 mb-2" onClick={handleShow} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>

            <Offcanvas className="col-3 col-xl-2 sticky-sm-top p-0 bg-dark" show={show} onHide={handleClose} responsive="sm">
                <Offcanvas.Header closeButton closeVariant="white">
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Navbar className="col-12 p-0 m-0">
                        <div className="d-flex flex-column px-3 pt-2 text-center min-vh-100 text-white d-flex justify-content-start">
                            
                            <div className="mb-4">
                                <Link to="/" className="" >
                                    <img className="col-12 mb-4 " src={logo} alt="logo"/>
                                </Link>

                                <div className="d-flex align-items-center justify-content-evenly">
                                    <Link className="nav-link" to="/Cart">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                                        </svg>
                                    </Link>
                                    <Link className="nav-link" to="/Account/Profile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            <div style={{"border": "ridge white 10px"}}>
                                <div role="button" onClick={() => filter("")} className="col-12 nav-link">
                                    <p className="fs-4 m-0 p-1 border">Full Menu</p>
                                </div>

                                {
                                    categories.map((cat, i) => {
                                        return (
                                            <div key={i} role="button" onClick={() => filter(cat._id)} className="col-12 nav-link ">
                                                <p className="fs-4 m-0 p-1 border">{cat.name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Navbar>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default MenuNav;