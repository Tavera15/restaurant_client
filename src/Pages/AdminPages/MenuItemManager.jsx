import React from "react";
import MenuItemCard from "../../Components/MenuItemCard";

function MenuManager()
{
    return(
        <div className="container">
            <h1>Menu Manager</h1>

            <div>
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
            </div>
        </div>
    );
}

export default MenuManager;