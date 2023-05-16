import React from "react";
import {NavLink} from "react-router-dom";

import "./NavLinks.css";

function NavLinks(props) {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>All Users</NavLink>
        </li>
        <li>
            <NavLink to="/u1/places">My Places</NavLink>
        </li>
        <li>
            <NavLink to="/places">Add Places</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Login/Sign Up</NavLink>
        </li>

    </ul>
}

export default NavLinks;
