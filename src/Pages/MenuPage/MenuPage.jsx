import React, { useEffect, useState } from "react";
import menuVideo from "../../StaticMedia/MenuVid.mp4";
import MenuItem from "../../Components/MenuItem";
import MenuNav from "../../Components/MenuNav";
import axios from "axios";

function MenuPage()
{
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_SERVER_API + "/MenuItem/")
            .then((res) => setMenuItems(res.data))
            .catch((err) => console.log(err))
    }, [])

    return(
        <div className="container-fluid flex-row-wrap center-items">
            <div className="row align-items-start">
                <MenuNav />
      
                <div className="col container">
                    <video src={menuVideo} className="rest_video" autoPlay muted loop 
                        style={{height: "24rem", objectFit: "cover", backgroundColor: "rgba(0,0,0,.5)", filter: "blur(0.4px) brightness(64%)"}} 
                    />

                    <div className="flex-row-wrap center-items food-items" >
                        {
                            menuItems.map((m, i) => {
                                return <MenuItem key={i}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuPage;