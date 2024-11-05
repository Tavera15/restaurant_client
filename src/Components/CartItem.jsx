import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editCartItem } from "../Features/CartSlice";

function CartItem({id, name, customObj})
{
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    function counter(e, amount)
    {
        e.preventDefault();
        setQty(qty + amount <= 1 ? 1 : qty + amount);
    }

    async function UpdateItem(e)
    {
        e.preventDefault();
        
        const data = {

        }
        
        await dispatch(editCartItem());
    }

    return(
        <div className="rounded border mb-4">
            <div className="card bg-dark">
          <div className="card-header py-3">
            <h5 className="mb-0 text-truncate">{id}</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                    className="w-100 rounded" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p><strong>Blue denim shirt</strong></p>
                <p>Color: blue</p>
                <p>Size: M</p>

                <div className="d-flex justify-content-center">

                  <Form className="d-block" onSubmit={(e) => UpdateItem(e)}>

                        <Button  type="button" data-bs-toggle="modal" data-bs-target={"#exampleModalCenter" } data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init
                          title="Edit item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                          </svg>
                        </Button>

                        <div className="modal fade" id={"exampleModalCenter" } tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                        {/* <div className="p-0 col-12">
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
                                            */}
                                        </div> 
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <Button variant="secondary" data-bs-dismiss="modal">Close</Button>
                                    <Button type="submit" variant="primary" data-bs-dismiss="modal">Update</Button>
                                </div>
                                </div>
                            </div>
                        </div>
                  </Form>
                  



                  <Button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-sm mb-2" data-mdb-tooltip-init
                    title="Remove item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                  </Button>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              
                <p className="text-start text-md-center">
                  <strong>Qty: 2</strong>
                </p>
                <p className="text-start text-md-center">
                  <strong>$17.99</strong>
                </p>
              </div>
              </div>
              </div>
            </div>
        </div>
    );
}

export default CartItem;

// https://mdbootstrap.com/docs/standard/extended/shopping-carts/