import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

    return(

        <div className="navbar" style={{backgroundColor:"black", height:"60px", alignItems:"center"}}>
            <div className="links" style={{display:"flex",flexDirection:"row", gap:"20px" ,justifyContent:"flex-end"}}>
                <Link to="/" style={{textDecoration:"none", color:"white"}}>Shop</Link>
                <Link to="/cart" style={{textDecoration:"none", color:"white"}}>Cart</Link>
            </div>
        </div>
    )
}


export default Navbar;