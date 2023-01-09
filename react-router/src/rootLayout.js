import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function rootLayout() {
  return (
    <>
      <div>
        <NavLink to="/">home</NavLink>
        <NavLink to="/home">homepage</NavLink>
        <NavLink to="/help">help</NavLink>
        <NavLink to="/git">git</NavLink>
        <NavLink to="/jsonlink">jsonLink</NavLink>
        <NavLink to="/kakarot">----id</NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default rootLayout;
