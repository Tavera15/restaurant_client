import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

function MenuItem()
{
    const [sizeSel, setSizeSel] = useState();
    
    return(


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
                    <Form className="form-group col-12">
                        <Button className="col-12" variant="outline-light" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Add to cart</Button>

                        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content bg-dark">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Pepperoni Pizza</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Card.Img variant="top" src="holder.js/100px180" />

                                <div>
                                    <h3 className="m-0 mt-2">Sizing</h3>
                                    <div className=" d-flex justify-content-scenter align-items-center flex-column">
                                        <div className="p-3 d-flex flex-column justify-content-start align-items-start">
                                            <Form.Check
                                                type="radio"
                                                id="size1"
                                                label="Medium"
                                                name="size"
                                            />
                                            <Form.Check
                                                type="radio"
                                                id="size2"
                                                label="Large"
                                                name="size"
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                
                            </div>
                            <div className="modal-footer">
                                <Button variant="secondary" data-bs-dismiss="modal">Close</Button>
                                <Button variant="primary" data-bs-dismiss="modal">Add To Cart</Button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MenuItem;