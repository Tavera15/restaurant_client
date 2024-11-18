import React, { useEffect, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/CartSlice";


function MenuItem({name, price, desc, customs, id, img})
{
    const [qty, setQty] = useState(1);
    const [customObj, setCustomObj] = useState({});
    const [customSelects, setCustomSelects] = useState({});
    const dispatch = useDispatch();
    
    useEffect(() => {
        setCustomObj(JSON.parse(customs));
        Object.keys(JSON.parse(customs)).map((k, i) => setCustomSelects(prev => ({...prev, [k]: JSON.parse(customs)[k].split(",")[Math.floor(JSON.parse(customs)[k].split(",").length / 2)]})));
    }, [])

    async function AddToCart(e)
    {
        e.preventDefault();
        const data ={
            itemId: id,
            qty: qty,
            customs: customSelects
        }

        await dispatch(addToCart(data));
    }

    function counter(e, amount)
    {
        e.preventDefault();

        setQty(qty + amount <= 1 ? 1 : qty + amount);
    }

    return(
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2">
            <Card>
                <Card.Img variant="top" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} src={img ? img : "holder.js/100px180"} alt={id} />
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
                                    <Card.Img variant="top" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} src={img ? img : "holder.js/100px180"} alt={id} />

                                    <div className="mt-4 d-flex justify-content-center col-12 align-items-center col">

                                      <Button type="image" className="bg-transparent" style={{"border": "none"}} onClick={(e) => counter(e, -1)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
                                        </svg>
                                      </Button>
                                      
                                      <h4 className="m-0 ms-4 me-4 ">{qty}</h4>

                                      <Button type="image" className="bg-transparent" style={{"border": "none"}} onClick={(e) => counter(e, 1)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="lime" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                                        </svg>
                                      </Button>

                                    </div>

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
                                                                                            required = {true}
                                                                                            type="radio"
                                                                                            id="o"
                                                                                            label={o}
                                                                                            name={k}
                                                                                            value={o}
                                                                                            key={index}
                                                                                            className="m-2"
                                                                                            defaultChecked={(Math.floor(customObj[k].split(",").length / 2) === index)}
                                                                                            onChange={(e) => setCustomSelects(prev => ({...prev, [k]: o}))}
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