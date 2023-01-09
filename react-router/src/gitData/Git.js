import React from "react";
import { Link, Outlet } from "react-router-dom";

function Git() {
  return (
    <div>
      Git
      <Link to="login">login</Link>
      <Outlet />
    </div>
  );
}

export default Git;
