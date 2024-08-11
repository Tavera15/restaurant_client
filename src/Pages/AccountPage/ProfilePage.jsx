import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import MainNavBar from "../../Components/MainNavBar";
import AccountNav from "../../Components/AccountNav";
import axios from "axios";
import store from "../../store";

function ProfilePage()
{
    const [name, setName]                   = useState("");
    const [email, setEmail]                 = useState("");
    const [phone, setPhone]                 = useState("");
    const [addressLine1, setAddress1]       = useState("");
    const [addressLine2, setAddress2]       = useState("");
    const [city, setCity]                   = useState("");
    const [state, setState]                 = useState("");
    const [zipCode, setZipCode]             = useState("");

    const token = store.getState().token.value;
    
    async function UpdateProfile(e)
    {
        e.preventDefault();

        const newData = {
            name: name,
            email: email,
            phone: phone,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            city: city,
            state: state,
            zip: zipCode
        }

        const res = await axios.put(import.meta.env.VITE_SERVER_API + "/User/UpdateUser", newData, {headers: {Authorization: token}})
        console.log(res)
    }

    return(
        <div className="container-fluid flex-row-wrap center-items">
            <div className="row align-items-start">
                <AccountNav />
                <div className="container col-md-6">
                    <h1>Profile</h1>
                    <Form onSubmit={(e) => UpdateProfile(e)}>
                        <div className="form-row row">
                            <div className="form-group col-md-4 mt-3">
                                <label htmlFor="inputName">Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="inputName" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-4 mt-3">
                                <label htmlFor="inputEmail">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="inputEmail" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-4 mt-3">
                                <label htmlFor="inputPhone">Telephone</label>
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="telephone" className="form-control" id="inputPhone" placeholder="123-456-7890" />
                            </div>
                        </div>
                        <div className="form-group mt-3 mt-3">
                            <label htmlFor="inputAddress">Address Line 1</label>
                            <input value={addressLine1} onChange={(e) => setAddress1(e.target.value)} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="form-group mt-3 mt-3">
                            <label htmlFor="inputAddress2">Address Line 2</label>
                            <input value={addressLine2} onChange={(e) => setAddress2(e.target.value)} type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="form-row row">
                            <div className="form-group col-md-4 mt-3">
                                <label htmlFor="inputCity">City</label>
                                <input value={city} onChange={(e) => setCity(e.target.value)} type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="form-group col-md-4 mt-3">
                                <label htmlFor="inputState">State</label>
                                <input value={state} onChange={(e) => setState(e.target.value)} type="text" className="form-control" id="inputState" />
                            </div>
                            <div className="form-group col-md-4 mt-3">
                                <label htmlFor="inputZip">Zip</label>
                                <input value={zipCode} onChange={(e) => setZipCode(e.target.value)} type="text" className="form-control" id="inputZip" />
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