import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  to: string
  text: string
}

function NavItem({ to, text }: Props) {
  const activeStyle = {
    fontWeight: "bold",
  };
  return (
    <li>
      <NavLink
        to={to}
        style={(navData) => (navData.isActive ? activeStyle : {})}
      >
        {text}
      </NavLink>
    </li>
  );
}

export default NavItem;
