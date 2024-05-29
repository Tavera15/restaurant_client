import React from "react";
import CartItem from "../../Components/CartItem";
import MainNavBar from "../../Components/MainNavBar";
import { Button } from "react-bootstrap";

function CartPage()
{
    return(
        <div className="min-vh-100">
            <MainNavBar />
            <div className="container py-4 center-itexms flex-row-wrap">
                <div className="col-12 col-md-8 cart" >
                    <div className="title">
                        <div className="">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                        </div>
                    </div>    
                    
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    
                </div>
                <div className="col-12 col-md-4 mt-4 mt-md-0 summary">
                    <h4>Summary</h4>
                    <div className="flex-row-wrap border-top">
                        <div className="col">ITEMS 3</div>
                        <div className="col text-right">&euro; 132.00</div>
                    </div>
                    <div className="flex-row-wrap" >
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">&euro; 137.00</div>
                    </div>
                    <div className="my-4 d-flex btn-group-justified justify-content-evenly">
                        <Button className="btn" variant="outline-danger" style={{width: "7rem"}}>Clear</Button>
                        <Button className="btn" variant="outline-success" style={{width: "7rem"}}>Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;