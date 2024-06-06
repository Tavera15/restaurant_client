import React from "react";
import { Card, Form, Button } from "react-bootstrap";

function MenuItemForm({btnText, num})
{
    return(
        <div className="modal fade" id={`menuItemFormModal${num}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label">Sizing</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label">Toppings</label>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Button variant="secondary" data-bs-dismiss="modal">Close</Button>
                        <Button variant="primary" data-bs-dismiss="modal">{btnText}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuItemForm;