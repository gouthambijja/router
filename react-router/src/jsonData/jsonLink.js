import React from "react";
import { Link, Outlet } from "react-router-dom";

function jsonLink() {
  return (
    <div>
      jsonLink
      <Link to="loadData">loadData</Link>
      <Outlet />
    </div>
  );
}

export default jsonLink;
