import axios from "axios";
import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

function LoadData() {
  const users = useLoaderData();
  return (
    <div>
      hello LoadData
      {users.map((item) => {
        return (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.title}</Link>
          </li>
        );
      })}
      <Outlet />
    </div>
  );
}

const loadUser = async () => {
  let data = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data.data;
};

export default LoadData;
export { loadUser };
