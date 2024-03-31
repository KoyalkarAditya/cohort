import axios from "axios";

async function fetchData() {
  const response = await axios(" http://localhost:3000/api/user");
  return response;
}
export default async function User() {
  // we can also use useEffect and useState but it makes next properties useless
  // so we use async components
  const response = await fetchData();
  return <div>{response.data.message}</div>;
}
