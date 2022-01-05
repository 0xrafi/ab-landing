import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  to: string
  text: string
  onClick: () => {}
}

function NavItem({ to, text, onClick }: Props) {
  const activeStyle = {
    fontWeight: "bold",
  };
  return (
    <li onClick={onClick}>
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
