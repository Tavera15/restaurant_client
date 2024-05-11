import React,{useState} from "react";
import { Card, Button, Navbar, Offcanvas, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../StaticMedia/TheGuyLogo.png";
import menuVideo from "../../StaticMedia/MenuVid.mp4";

function MenuPage()
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="container-fluid flex-row-wrap center-items">
            <div className="row align-items-start">
                <Button variant="primary" className="d-sm-none" onClick={handleShow}>
                    Launch
                </Button>

                <Offcanvas className="col-3 col-xl-2 sticky-sm-top min-vh-100 p-0 bg-dark" show={show} onHide={handleClose} responsive="sm">
                    <Offcanvas.Header closeButton>
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
      
                <div className="col container">


                <video src={menuVideo} className="rest_video" autoPlay muted loop style={{height: "24rem", objectFit: "cover", backgroundColor: "rgba(0,0,0,.5)", filter: "blur(0.4px) brightness(64%)"}} />

                <div className="  flex-row-wrap center-items food-items" >
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body className="bg-dark">
                                <Card.Title>Pepperoni Pizza</Card.Title>
                                <Card.Text>
                                Pepperoni, cheese, sauce
                                </Card.Text>
                                <Card.Text>
                                    $5.00
                                </Card.Text>
                                <div className="form-group col-12">
                                    <Button className="col-12" variant="outline-light">Add to cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body className="bg-dark">
                                <Card.Title>Pepperoni Pizza</Card.Title>
                                <Card.Text>
                                Pepperoni, cheese, sauce
                                </Card.Text>
                                <Card.Text>
                                    $5.00
                                </Card.Text>
                                <div className="form-group col-12">
                                    <Button className="col-12" variant="outline-light">Add to cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body className="bg-dark">
                                <Card.Title>Pepperoni Pizza</Card.Title>
                                <Card.Text>
                                Pepperoni, cheese, sauce
                                </Card.Text>
                                <Card.Text>
                                    $5.00
                                </Card.Text>
                                <div className="form-group col-12">
                                    <Button className="col-12" variant="outline-light">Add to cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body className="bg-dark">
                                <Card.Title>Pepperoni Pizza</Card.Title>
                                <Card.Text>
                                Pepperoni, cheese, sauce
                                </Card.Text>
                                <Card.Text>
                                    $5.00
                                </Card.Text>
                                <div className="form-group col-12">
                                    <Button className="col-12" variant="outline-light">Add to cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body className="bg-dark">
                                <Card.Title>Pepperoni Pizza</Card.Title>
                                <Card.Text>
                                Pepperoni, cheese, sauce
                                </Card.Text>
                                <Card.Text>
                                    $5.00
                                </Card.Text>
                                <div className="form-group col-12">
                                    <Button className="col-12" variant="outline-light">Add to cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body className="bg-dark">
                                <Card.Title>Pepperoni Pizza</Card.Title>
                                <Card.Text>
                                Pepperoni, cheese, sauce
                                </Card.Text>
                                <Card.Text>
                                    $5.00
                                </Card.Text>
                                <div className="form-group col-12">
                                    <Button className="col-12" variant="outline-light">Add to cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body className="bg-dark">
                                <Card.Title>Pepperoni Pizza</Card.Title>
                                <Card.Text>
                                Pepperoni, cheese, sauce
                                </Card.Text>
                                <Card.Text>
                                    $5.00
                                </Card.Text>
                                <div className="form-group col-12">
                                    <Button className="col-12" variant="outline-light">Add to cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body className="bg-dark">
                                <Card.Title>Pepperoni Pizza</Card.Title>
                                <Card.Text>
                                Pepperoni, cheese, sauce
                                </Card.Text>
                                <Card.Text>
                                    $5.00
                                </Card.Text>
                                <div className="form-group col-12">
                                    <Button className="col-12" variant="outline-light">Add to cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body className="bg-dark">
                                <Card.Title>Pepperoni Pizza</Card.Title>
                                <Card.Text>
                                Pepperoni, cheese, sauce
                                </Card.Text>
                                <Card.Text>
                                    $5.00
                                </Card.Text>
                                <div className="form-group col-12">
                                    <Button className="col-12" variant="outline-light">Add to cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default MenuPage;