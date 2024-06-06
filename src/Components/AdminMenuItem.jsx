import React from "react";
import { Button, Card, Form } from "react-bootstrap";

function AdminMenuItem()
{
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

                        <Button className="col-6" variant="primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Edit</Button>
                        <Button className="col-6" variant="outline-danger" data-bs-toggle="modal" data-bs-target="#confirm-delete-modal">Delete</Button>

                        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content bg-dark">
                                    <div className="modal-header">
                                        <input placeholder="Menu Item Name" />
                                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <Card.Img variant="top" src="holder.js/100px180" />

                                        <input className=" mt-4 form-control" placeholder="Details" />
                                        <input className=" mt-4 form-control" placeholder="Price" />

                                        <div className="mt-4">
                                            <h3 className="my-2">Customizations</h3>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" />
                                                <label class="form-check-label">Sizing</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" />
                                                <label class="form-check-label">Toppings</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <Button variant="secondary" data-bs-dismiss="modal">Close</Button>
                                        <Button variant="primary" data-bs-dismiss="modal">Update</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="confirm-delete-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content bg-dark">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalCenterTitle">Pepperoni Pizza</h5>
                                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Are you sure you want to delete this menu item?</p>

                                        <div className="modal-footer">
                                            <Button type="button" variant="secondary" data-bs-dismiss="modal">Close</Button>
                                            <Button type="button" variant="danger" data-bs-dismiss="modal">Delete</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AdminMenuItem;