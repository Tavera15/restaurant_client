import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

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
                    <form className="form-group col-12">
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
                                <div className="form-check">
                                    <input className="form-check-input" onChange={(e) => setSizeSel(e.target.value)} type="radio" name="size" id="size1" value="M" />
                                    <label className="form-check-label" htmlFor="size1">M</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" onChange={(e) => setSizeSel(e.target.value)} type="radio" name="size" id="size2" value="L" />
                                    <label className="form-check-label" htmlFor="size2">L</label>
                                </div>
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Add To Cart</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MenuItem;