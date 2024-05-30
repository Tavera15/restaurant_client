import React from "react";
import { Button, Form } from "react-bootstrap";
import MainNavBar from "../../Components/MainNavBar";
import AccountNav from "../../Components/AccountNav";

function ProfilePage()
{
    return(
        <div className="container-fluid flex-row-wrap center-items">
            <div className="row align-items-start">
                <AccountNav />
                <div className="container col-md-6">
                    <h1>Profile</h1>
                    <Form>
                        <div className="form-row row">
                            <div className="form-group col-md-6 mt-3">
                                <label htmlFor="inputName">Name</label>
                                <input type="text" className="form-control" id="inputName" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-6 mt-3">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group mt-3 mt-3">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="form-group mt-3 mt-3">
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="form-row row">
                            <div className="form-group col-md-4 mt-3">
                                <label htmlFor="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="form-group col-md-4 mt-3">
                                <label htmlFor="inputState">State</label>
                                <input type="text" className="form-control" id="inputState" />
                            </div>
                            <div className="form-group col-md-4 mt-3">
                                <label htmlFor="inputZip">Zip</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                        </div>
                        <Button className="mt-3" type="submit" variant="success">Update</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;