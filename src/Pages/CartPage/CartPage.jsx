import React from "react";
import CartItem from "../../Components/CartItem";
import MainNavBar from "../../Components/MainNavBar";

function CartPage()
{
    return(
        <div>
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
                    <button className="btn">CHECKOUT</button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;