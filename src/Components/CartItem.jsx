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
        <div className="border mb-4 bg-whiste texst-black">
            <div class="card bg-dark">
          <div class="card-header py-3">
            <h5 className="mb-0 text-truncate">Long titel name for food item for food item for food item</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                    class="w-100 rounded" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div class="mask"></div>
                  </a>
                </div>
              </div>

              <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p><strong>Blue denim shirt</strong></p>
                <p>Color: blue</p>
                <p>Size: M</p>
                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init
                  title="Edit item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                  </svg>
                </button>
                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-danger btn-sm mb-2" data-mdb-tooltip-init
                  title="Remove item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg>
                </button>
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              
                <p class="text-start text-md-center">
                  <strong>Qty: 2</strong>
                </p>
                <p class="text-start text-md-center">
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