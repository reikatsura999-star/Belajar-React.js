import { Outlet,Link } from "react-router-dom";
import React from "react";

function Beranda(){
    return(
        <div>
        <h1>This is Beranda</h1>

        <p>you can see who i am in this web</p>

        <nav>
            <ul>
                <li><Link to='/auth'>login</Link></li>
            </ul>
        </nav>
        <hr />
        <Outlet />
    </div>
    )
}
export default Beranda;