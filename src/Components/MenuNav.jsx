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

            <Offcanvas className="col-3 col-xl-2 sticky-sm-top min-vh-100 p-0 bg-dark" show={show} onHide={handleClose} responsive="sm">
                <Offcanvas.Header closeButton closeVariant="white">
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Navbar className="col-12">
                        <div className="d-flex flex-column px-3 pt-2 text-center text-white">
    
                            <Link to="/" className="pb-3" >
                                <img className="col-12" src={logo} alt="logo"/>
                            </Link>
    
                            <hr />
    
                            <div role="button" onClick={() => filter("")} className="col-12 nav-link mb-2">
                                <p className="fs-4">Full Menu</p>
                            </div>

                            {
                                categories.map((cat, i) => {
                                    return (
                                        <div key={i} onClick={() => filter(cat._id)} className="col-12 nav-link mb-2">
                                            <p className="fs-4">{cat.name}</p>
                                        </div>
                                    )
                                })
                            }
                            <hr />

                            <Link to="/Cart" className="col-12 nav-link mb-2">
                                <p className="fs-4" >Cart</p>
                            </Link>
    
                        </div>
                    </Navbar>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default MenuNav;