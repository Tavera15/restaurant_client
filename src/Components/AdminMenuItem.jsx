import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import MenuItemForm from "../Forms/MenuItemForm";
import DeleteMenuItemForm from "../Forms/DeleteMenuItemForm";

function AdminMenuItem({num, key})
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

                        <Button className="col-6" variant="primary" data-bs-toggle="modal" data-bs-target={`#menuItemFormModal${num}`}>Edit</Button>
                        <Button className="col-6" variant="outline-danger" data-bs-toggle="modal" data-bs-target={`#confirmDeleteModal${num}`}>Delete</Button>

                        <MenuItemForm btnText={"Update"} num={num} />
                        <DeleteMenuItemForm num={num} />
                        
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AdminMenuItem;