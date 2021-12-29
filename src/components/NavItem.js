import React from 'react';
import { NavLink } from "react-router-dom";


// TODO fix this
function NavItem(to) {
    const activeStyle = {
        fontWeight: "bold",
    };
    return (
        <NavLink
            to={to}
            style={(navData) => navData.isActive ? activeStyle : {}}
        >Home</NavLink>
    );
}

export default NavItem;