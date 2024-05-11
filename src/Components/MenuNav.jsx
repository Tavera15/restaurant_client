import React, {useState} from "react";
import { Offcanvas, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../StaticMedia/TheGuyLogo.png";

function MenuNav()
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Button variant="primary" className="d-sm-none" onClick={handleShow}>
                Launch
            </Button>

            <Offcanvas className="col-3 col-xl-2 sticky-sm-top min-vh-100 p-0 bg-dark" show={show} onHide={handleClose} responsive="sm">
                <Offcanvas.Header closeButton="white" closeVariant="white">
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Navbar className="col-12">
                        <div className="d-flex flex-column align-items-center px-3 pt-2 text-white text-center">
                        
    
                            <Link to="/" className="pb-3" >
                                <img className="col-12" src={logo} alt="logo"/>
                            </Link>
    
                            <hr />
    
                            <Link to="/"className="col-12 nav-link mb-2">
                                <p className="fs-4">Full Menu</p>
                            </Link>
    
                            <Link to="/" className="col-12 nav-link mb-2">
                                <p className="fs-4">Appetizers</p>
                            </Link>
    
                            <Link to="/" className="col-12 nav-link mb-2">
                                <p className="fs-4" >Dinner</p>
                            </Link>
    
                        </div>
                    </Navbar>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default MenuNav;