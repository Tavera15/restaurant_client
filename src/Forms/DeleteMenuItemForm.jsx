import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

function DeleteMenuItemForm({id, name, num})
{
    const token = useSelector(state => state.token.value);
    
    function handleDelete()
    {
        axios.delete(import.meta.env.VITE_SERVER_API + "/MenuItem/DeleteMenuItem/" + id, {headers: {Authorization: token}})
            .then(window.location.reload())
            .catch((err) => console.log(err))
        
    }

    return(
        <div className="modal fade" id={`confirmDeleteModal${num}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content bg-dark">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">{name}</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <p>Are you sure you want to delete this menu item?</p>

                        <div className="modal-footer">
                            <Button onClick={() => handleDelete()} type="button" variant="danger" className="col-12 m-0" data-bs-dismiss="modal">Delete</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteMenuItemForm;