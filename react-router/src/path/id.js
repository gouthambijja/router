import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
function Id() {
  const data = useLoaderData();
  const { id } = useParams();
  return (
    <div>
      {id}
      {data.title}
    </div>
  );
}

export default Id;
export const fetchJsonId = async ({ params }) => {
  const { id } = params;
  let data = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  return data.data;
};
