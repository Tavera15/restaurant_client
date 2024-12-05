import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import AccountNav from "../../Components/AccountNav";
import axios from "axios";

function OrdersPage()
{
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_SERVER_API + "/Order/")
            .then((res) => setOrders(res.data))
    }, [])

    return(
        <div className="container-fluid min-vh-100 col-12 flex-row-wrap center-items">
            <div className="row col-12 align-items-start">
                <AccountNav />
                <div className="container col-sm-8">
                    <h1>Orders</h1>
                    <div className="table-responsive">
                        <Table className="table" variant="dark">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Order Number</th>
                                <th>Total</th>
                                <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((o, i) => {
                                        return (
                                            <tr role="button" onClick={() => console.log(o._id)} key={i}>
                                                <td className="align-middle">{i+1}</td>
                                                <td className="align-middle">{o._id}</td>
                                                <td className="align-middle">${o.grand_total.toFixed(2)}</td>
                                                <td className="align-middle">{o.status}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrdersPage;