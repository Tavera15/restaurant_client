import React from "react";
import MenuItemCard from "../../Components/MenuItemCard";
import MenuItem from "../../Components/MenuItem";
import AdminMenuItem from "../../Components/AdminMenuItem";
import { Button } from "react-bootstrap";
import MenuItemForm from "../../Forms/MenuItemForm";

function MenuManager()
{
    return(
        <div className="container">
            <h1>Menu Manager</h1>

            <div>
                <Button className="" variant="success" data-bs-toggle="modal" data-bs-target="#menuItemFormModal0">Create New Item</Button>
                <MenuItemForm btnText={"Create"} num={0}/>
            </div>

            <div className="flex-row-wrap center-items">
                <AdminMenuItem num={1}/>
                <AdminMenuItem num={2}/>
                <AdminMenuItem num={3}/>
                <AdminMenuItem num={4}/>
            </div>
        </div>
    );
}

export default MenuManager;