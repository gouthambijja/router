import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

function Gitlogin() {
  const login = useLoaderData();
  return <div>Gitlogin:{login}</div>;
}
const GitLoader = async () => {
  const data = await axios.get("https://api.github.com/users/gouthambijja");
  const fdata = data.data.login;
  return fdata;
};
export default Gitlogin;
export { GitLoader };
