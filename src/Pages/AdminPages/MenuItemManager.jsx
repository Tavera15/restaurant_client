import React from "react";
import MenuItemCard from "../../Components/MenuItemCard";

function MenuManager()
{
    return(
        <div className="container">
            <h1>Menu Manager</h1>

            <div className="flex-row-wrap center-items">
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
            </div>
        </div>
    );
}

export default MenuManager;