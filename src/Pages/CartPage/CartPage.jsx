import React, { useEffect, useState } from "react";
import CartItem from "../../Components/CartItem";
import MainNavBar from "../../Components/MainNavBar";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCartItems } from "../../Features/CartSlice";

function CartPage()
{
    const dispatch = useDispatch();
    const total = useSelector(state => state.cart.total);
    const items = useSelector(state => state.cart.items);
    const [isUpdated, setIsUpdated] = useState(false);

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
                <div>
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
                            <div className="col text-right">${total.toFixed(2)}</div>
                        </div>
                        <div className="my-4 d-flex btn-group-justified justify-content-evenly">
                            <Button type="reset" onClick={(e) => ClearCart(e)} className="btn" variant="danger" style={{width: "7rem"}}>Clear</Button>
                            <Button className="btn" variant="success" style={{width: "7rem"}}>Checkout</Button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;