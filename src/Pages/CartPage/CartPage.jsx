import React, { useEffect, useState } from "react";
import CartItem from "../../Components/CartItem";
import MainNavBar from "../../Components/MainNavBar";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCartItems } from "../../Features/CartSlice";
import { Form } from "react-bootstrap";
import axios from "axios";

function CartPage()
{
    const dispatch = useDispatch();
    const cartId = useSelector(state => state.cart.cart);
    const total = useSelector(state => state.cart.total);
    const items = useSelector(state => state.cart.items);
    const [isUpdated, setIsUpdated] = useState(false);

    const [name, setName]                   = useState("");
    const [email, setEmail]                 = useState("");
    const [phone, setPhone]                 = useState("");
    const [addressLine1, setAddress1]       = useState("");
    const [addressLine2, setAddress2]       = useState("");
    const [city, setCity]                   = useState("");
    const [state, setState]                 = useState("");
    const [zipCode, setZipCode]             = useState("");

    useEffect(() => {

        async function cartUpdate()
        {
            if(!isUpdated)
            {
                await dispatch(getCartItems());
                setIsUpdated(true);
            }
        }

        cartUpdate()
        
    }, [isUpdated])

    async function SubmitOrder(e)
    {
        e.preventDefault();

        const data = {
            "customer_delivery": {
                name,
                email,
                phone,
                addressLine1,
                addressLine2,
                city,
                state,
                zipCode
            },
            cartId
        }

        await axios.post(import.meta.env.VITE_SERVER_API + "/Order/PlaceOrder", data)
        .then(ClearCart(e))
        .catch((err) => console.log(err))
    }

    async function ClearCart(e)
    {
        e.preventDefault();
        await dispatch(clearCart({}));
        setIsUpdated(false);
    }

    return(
        <div className="">
            <MainNavBar />
            <div className="min-vh-100" style={{"background": "linear-gradient( rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64) ), url(https://images.pexels.com/photos/6287495/pexels-photo-6287495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
                 "backgroundSize": "cover", "backgroundRepeat": "no-repeat", "backgroundPosition": "left"}}>
                
                {
                    items.length === 0
                    ? <h1>No Items in Your Cart</h1>
                    : <div>
                    <div className="container py-4 flex-row-wrap">
                        <div className="col-12 col-md-6">
                            <div className="title">
                                <div className="">
                                    <div className="col"><h4><b>Shopping Cart</b></h4></div>
                                </div>
                            </div>
                            {
                                items.map((item, i) => {
                                    return(
                                        <CartItem
                                            id={item}
                                            key={item}
                                            reloadFunction={() => setIsUpdated(false)}
                                        />
                                    )
                                })
                            }
                            
                        </div>
                        <div className="col-12 col-md-6 mt-4 mt-md-0 summary">
                            <h4>Summary</h4>
                            <div className="flex-row-wrap border-top">
                                <div className="col">TOTAL PRICE</div>
                                <div className="col text-right">${(total || 0).toFixed(2)}</div>
                            </div>
                            <div className="my-4 d-flex btn-group-justified justify-content-evenly">
                                <Button type="reset" onClick={(e) => ClearCart(e)} className="btn" variant="danger" style={{width: "7rem"}}>Clear</Button>
                                <Button data-bs-toggle="modal" data-bs-target="#checkoutModalCenter" className="btn" variant="success" style={{width: "7rem"}}>Checkout</Button>
                            </div>
                        </div>
                        
                    <div className="modal fade" id="checkoutModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content bg-dark">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Checkout</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <Form onSubmit={(e) => SubmitOrder(e)}>
                                <div className="form-row row">
                                    <div className="form-group col-md-4 mt-3">
                                        <label htmlFor="inputName">Name</label>
                                        <input required value={name || ""} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="inputName" placeholder="Name" />
                                    </div>
                                    <div className="form-group col-md-4 mt-3">
                                        <label htmlFor="inputEmail">Email</label>
                                        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                    </div>
                                    <div className="form-group col-md-4 mt-3">
                                        <label htmlFor="inputPhone">Telephone</label>
                                        <input required value={phone || ""} onChange={(e) => setPhone(e.target.value)} type="telephone" className="form-control" id="inputPhone" placeholder="123-456-7890" />
                                    </div>
                                </div>
                                <div className="form-group mt-3 mt-3">
                                    <label htmlFor="inputAddress1">Address Line 1</label>
                                    <input required value={addressLine1 || ""} onChange={(e) => setAddress1(e.target.value)} type="text" className="form-control" id="inputAddress1" placeholder="1234 Main St" />
                                </div>
                                <div className="form-group mt-3 mt-3">
                                    <label htmlFor="inputAddress2">Address Line 2</label>
                                    <input value={addressLine2 || ""} onChange={(e) => setAddress2(e.target.value)} type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div className="form-row row">
                                    <div className="form-group col-md-4 mt-3">
                                        <label htmlFor="inputCity">City</label>
                                        <input required value={city || ""} onChange={(e) => setCity(e.target.value)} type="text" className="form-control" id="inputCity" />
                                    </div>
                                    <div className="form-group col-md-4 mt-3">
                                        <label htmlFor="inputState">State</label>
                                        <input required value={state || ""} onChange={(e) => setState(e.target.value)} type="text" className="form-control" id="inputState" />
                                    </div>
                                    <div className="form-group col-md-4 mt-3">
                                        <label htmlFor="inputZip">Zip</label>
                                        <input required value={zipCode || ""} onChange={(e) => setZipCode(e.target.value)} type="text" className="form-control" id="inputZip" />
                                    </div>
                                </div>
                                <div className="mt-4 modal-footer">
                                    <button type="button" className="checkout-close-btn btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-success">Place Order</button>
                                </div>
                            </Form>
                            </div>
                            </div>
                        </div>
                    </div>
    
                    </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default CartPage;