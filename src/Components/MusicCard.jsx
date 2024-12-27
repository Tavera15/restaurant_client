import React from "react";
import { Card } from "react-bootstrap";

function MusicCard({performer, date, img})
{
    return(
        <div className="col-12 col-md-4 p-2">
            <Card className="">
                <Card.Img variant="top" src={img} style={{"aspectRatio": "1/1", "objectFit": "cover"}}/>
                <Card.Body className="bg-dark">
                    <Card.Title>{performer}</Card.Title>
                    <Card.Text>
                    {date}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MusicCard;