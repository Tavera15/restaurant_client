import React from "react";
import { Button } from "react-bootstrap";

function DeleteMenuItemForm({num})
{
    return(
        <div className="modal fade" id={`confirmDeleteModal${num}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                            <Button type="button" variant="danger" className="col-12 m-0" data-bs-dismiss="modal">Delete</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteMenuItemForm;