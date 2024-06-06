import React from "react";
import MenuItemCard from "../../Components/MenuItemCard";
import MenuItem from "../../Components/MenuItem";
import AdminMenuItem from "../../Components/AdminMenuItem";

function MenuManager()
{
    return(
        <div className="container">
            <h1>Menu Manager</h1>

            <div className="flex-row-wrap center-items">
                <AdminMenuItem />
                <AdminMenuItem />
                <AdminMenuItem />
                <AdminMenuItem />
            </div>
        </div>
    );
}

export default MenuManager;