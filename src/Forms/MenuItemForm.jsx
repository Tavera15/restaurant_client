import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

function MenuItemForm({btnText, num})
{
    const [currentListOptions, setCurrentListOptions] = useState([]);
    const [listName, setListName] = useState("");
    const [listOpt, setListOpt] = useState("");
    const [customs, setCustoms] = useState({});

    function addOptToList(e)
    {
        e.preventDefault();

        if(listOpt.trim() === "")
        {
            alert("List option cannot be blank");
            return;
        }

        setCurrentListOptions(prev => [...prev, listOpt.trim()]);
        setListOpt("");
    }

    function saveList(e)
    {
        e.preventDefault();

        if(listName.trim() === "" || currentListOptions.length === 0)
        {
            alert("List name cannot be blank, or need to have at least one custom option");
        }

        setCustoms(prev => ({...prev, [listName.trim()]: currentListOptions.toString()}));
        setListName("");
        setListOpt("");
        setCurrentListOptions([]);
    }


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

                        <input className="mt-4 form-control" placeholder="Details" />
                        <input className="mt-4 form-control" placeholder="Price" />

                        <div className="mt-4">
                            <h3 className="my-2">Customizations</h3>

                            <p>{JSON.stringify(customs)}</p>
                            
                            <Button className="mb-2">Customize</Button>
                            <div id="custom-form">
                                <input className="form-control" placeholder="Name: (ex. Size)" value={listName} onChange={(e) => setListName(e.target.value)}/>

                                <div className="mt-4">
                                    {
                                        currentListOptions.map((opt, i) => {
                                            return <p key={i}>{opt}</p>
                                        })
                                    }
                                </div>

                                <div className="mt-4">
                                    <input className="form-control" onChange={(e) => setListOpt(e.target.value)} value={listOpt} placeholder="Option: (ex. Small)"/>
                                    <Button className="mt-2 btn-success" onClick={(e) => saveList(e)}>Save List</Button>
                                    <Button className="mt-2" onClick={(e) => addOptToList(e)}>Add</Button>

                                </div>
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