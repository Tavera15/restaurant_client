import React from "react";

function CartPage()
{
    return(
        <div class="container py-4 center-itexms flex-row-wrap">
                <div class="col-12 col-md-8 cart" >
                    <div class="title">
                        <div class="">
                            <div class="col"><h4><b>Shopping Cart</b></h4></div>
                        </div>
                    </div>    
                    <div class=" border-top border-bottom">
                        <div class="flex-row-wrap main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" /></div>
                            <div class="col">
                                <div class=" text-muted">Shirt</div>
                                <div class="">Cotton T-shirt</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div class=" border-top border-bottom">
                        <div class="flex-row-wrap main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" /></div>
                            <div class="col">
                                <div class=" text-muted">Shirt</div>
                                <div class="">Cotton T-shirt</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div class=" border-top border-bottom">
                        <div class="flex-row-wrap main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" /></div>
                            <div class="col">
                                <div class=" text-muted">Shirt</div>
                                <div class="">Cotton T-shirt</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-12 col-md-4 mt-4 mt-md-0 summary">
                    <h4>Summary</h4>
                    <div class="flex-row-wrap border-top">
                        <div class="col">ITEMS 3</div>
                        <div class="col text-right">&euro; 132.00</div>
                    </div>
                    <div class="flex-row-wrap" >
                        <div class="col">TOTAL PRICE</div>
                        <div class="col text-right">&euro; 137.00</div>
                    </div>
                    <button class="btn">CHECKOUT</button>
                </div>
            </div>
            
    );
}

export default CartPage;