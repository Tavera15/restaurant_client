import React, { useState } from "react";
import { Button } from "react-bootstrap";

function CartItem()
{
    const [qty, setQty] = useState(1);

    function counter(e, amount)
    {
        e.preventDefault();
        setQty(qty + amount <= 1 ? 1 : qty + amount);
    }

    return(
        <div className="border-top border-bottom">
            <div className="flex-row-wrap align-items-center">
                <div className="col-1"><span>X</span></div>
                <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" /></div>
                <div className="col-6 justify-content-start align-items-center">
                    <div className=" text-muted">Shirt</div>
                    <div className="">Cotton T-shirt spaghetti and meatballs</div>
                    <div className="">&euro; 44.00<span className="close"></span></div>
                    <div className=""><span>Edit</span></div>
                </div>
                <div className="col-3">99.00</div>
            </div>
        </div>
    );
}

export default CartItem;