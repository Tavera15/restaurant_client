import React from "react";
import Category from "../../Components/Category";
import { Table } from "react-bootstrap";
import { Button } from "bootstrap";

function CategoryManager()
{
    return(
        <div className="container">
            <h1>Category Manager</h1>

            <div className="flex-row-wrap">
                <Category />
                <Category />
                <Category />
                <Category />
            </div>
        </div>
    );
}

export default CategoryManager;