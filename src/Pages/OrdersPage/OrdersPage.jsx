import React from "react";
import { Button, Table } from "react-bootstrap";
import AccountNav from "../../Components/AccountNav";

function OrdersPage()
{
    return(
        <div className="container-fluid flex-row-wrap center-items">
            <div className="row align-items-start">
                <AccountNav />
                <div className="container col-sm-8">
                    <h1>Orders</h1>
                    <Table responsive variant="dark">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Order Number</th>
                            <th>Total</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 3 }).map((_, index) => (
                                <tr key={index}>
                                    <td className="align-middle">{index+1}</td>
                                    <td className="align-middle">366234</td>
                                    <td className="align-middle">$23.78</td>
                                    <td className="align-middle"><Button>View</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default OrdersPage;