import React, { useEffect, useState } from "react";
import MenuItemCard from "../../Components/MenuItemCard";
import MenuItem from "../../Components/MenuItem";
import AdminMenuItem from "../../Components/AdminMenuItem";
import { Button, Card } from "react-bootstrap";
import MenuItemForm from "../../Forms/MenuItemForm";
import axios from "axios";
import { useSelector } from "react-redux";

function MenuManager()
{
    const [menuItems, setMenuItems] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
    const token = useSelector(state => state.token.value);

    useEffect(() => {
        if(!isUpdated)
        {
            axios.get(import.meta.env.VITE_SERVER_API + "/MenuItem/")
            .then((res) => setMenuItems(res.data))
            .then(() => setIsUpdated(true));
        }
    }, [isUpdated])

    function CreateMenuItem(e, data)
    {
        axios.post(import.meta.env.VITE_SERVER_API + "/MenuItem/NewMenuItem", data, {headers: {Authorization: token}})
        .finally(() => setIsUpdated(false))
    }

    return(
        <div className="min-vh-100 container">
            <h1>Menu Manager</h1>

            <div>
                <MenuItemForm btnAction={(e, data) => CreateMenuItem(e, data)} btnText={"Create"} num={-1}/>
            </div>

            <div className="d-flex row justify-content-start">

                <div data-bs-toggle="modal" data-bs-target="#menuItemFormModal-1" className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2 flex-grow-1 d-flex align-items-stretch">
                    <div role="button" className="rounded flex-grow-1 d-flex justify-content-center align-items-center p-4" style={{"border": "dashed 1px white"}}>
                        <h2>Create New Item</h2>
                    </div>
                </div>

                    {
                        menuItems.map((m, i) => {
                            return <AdminMenuItem item={m} num={i} id={m._id} key={m._id} updateFunction={setIsUpdated} />
                    })
                }
            </div>
        </div>
    );
}

export default MenuManager;