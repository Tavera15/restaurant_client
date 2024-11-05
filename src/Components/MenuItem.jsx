import React, { useEffect, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/CartSlice";


function MenuItem({name, price, desc, customs, id})
{
    const [customObj, setCustomObj] = useState({});
    const [customSelects, setCustomSelects] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setCustomObj(JSON.parse(customs));
        Object.keys(customObj).map((k, i) => customSelects[k] = "");
    }, [])

    async function AddToCart(e)
    {
        e.preventDefault();
        const data ={
            itemId: id,
            qty: 1,
            customs: customSelects
        }

        await dispatch(addToCart(data));
    }

    return(
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2">
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body className="bg-dark">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {desc}
                    </Card.Text>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <Form className="form-group col-12" onSubmit={(e) => AddToCart(e)}>
                        <Button className="col-12" variant="outline-light" data-bs-toggle="modal" data-bs-target={"#exampleModalCenter" + id}>Add to cart</Button>

                        <div className="modal fade" id={"exampleModalCenter" + id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content bg-dark">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">{name}</h5>
                                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <Card.Img variant="top" src="holder.js/100px180" />

                                    <div>
                                        <div>
                                            <div className="p-0 col-12">
                                                {
                                                    Object.keys(customObj).map((k,i) =>{
                                                        return (
                                                                    <div className="mb-4 mt-4" key={i}>
                                                                        <h4>{k}</h4>
                                                                        <div className="d-flex justify-content-center">
                                                                        {
                                                                            customObj[k].split(",").map((o, index) => {
                                                                                return <Form.Check
                                                                                            type="radio"
                                                                                            id="o"
                                                                                            label={o}
                                                                                            name={k}
                                                                                            value={o}
                                                                                            key={index}
                                                                                            className="m-2"
                                                                                            onClick={(e) => setCustomSelects(prev => ({...prev, [k]: o}))}
                                                                                        />
                                                                            })
                                                                        }
                                                                        </div>
                                                                        <hr />
                                                                    </div>
                                                                )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <Button variant="secondary" data-bs-dismiss="modal">Close</Button>
                                    <Button variant="primary" type="submit" data-bs-dismiss="modal">Add To Cart</Button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MenuItem;