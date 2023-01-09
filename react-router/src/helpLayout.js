import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function helpLayout() {
  return (
    <div>
      helpLayout
      <h2>Help page!</h2>
      <nav>
        <NavLink to="faq">faq</NavLink>
        <NavLink to="contact">contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default helpLayout;
