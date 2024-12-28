import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import MenuItemForm from "../Forms/MenuItemForm";
import DeleteMenuItemForm from "../Forms/DeleteMenuItemForm";
import axios from "axios";
import { useSelector } from "react-redux";

function AdminMenuItem({item, num, id, updateFunction})
{
    const token = useSelector(state => state.token.value);

    function UpdateMenuItem(e, data)
    {
        e.preventDefault();

        axios.put(import.meta.env.VITE_SERVER_API + "/MenuItem/UpdateMenuItem/" + id, data, {headers: {Authorization: token}})
        .finally(() => updateFunction(false))
    }

    return(
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2">
            <Card>
                <Card.Img style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} variant="top" src={item.image ? item.image : "holder.js/100px180"} alt={id}/>
                <Card.Body className="bg-dark">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        ${item.price}
                    </Card.Text>
                    <Form className="form-group col-12">

                        <Button className="col-6" variant="primary" data-bs-toggle="modal" data-bs-target={`#menuItemFormModal${num}`}>Edit</Button>
                        <MenuItemForm btnAction={(e, data) => UpdateMenuItem(e, data)} item={item} btnText={"Update"} num={num} />

                        <Button className="col-6" variant="outline-danger" data-bs-toggle="modal" data-bs-target={`#confirmDeleteModal${num}`}>Delete</Button>
                        <DeleteMenuItemForm name={item.name} id={id} num={num} />
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AdminMenuItem;