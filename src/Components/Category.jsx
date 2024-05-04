import React from "react";
import { Card, Button } from "react-bootstrap";

function Category()
{
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <div className="form-group col-12">
                        <Button className="col-12 mb-2" variant="primary">Edit</Button>
                        <Button className="col-12" variant="danger">Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Category;