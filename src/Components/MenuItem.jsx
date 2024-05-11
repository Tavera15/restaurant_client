import React from "react";
import { Card, Button } from "react-bootstrap";

function MenuItem()
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
                    <div className="form-group col-12">
                        <Button className="col-12" variant="outline-light">Add to cart</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MenuItem;