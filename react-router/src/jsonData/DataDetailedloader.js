import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

function DataDetailed() {
  const data = useLoaderData();
  return (
    <div>
      {console.log(data)}
      {data.userId}
      <div>{data.id}</div>
      <div>{data.title}</div>
      <div>{data.body}</div>
    </div>
  );
}
export const DateDetailedLoader = async ({ params }) => {
  const { id } = params;
  console.log("ehllo");
  let data = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  return data.data;
};
export default DataDetailed;
