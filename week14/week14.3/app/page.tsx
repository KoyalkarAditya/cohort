import client from "@/db";
async function fetchData() {
  //this code never reach the frontend thats the advantage
  const user = await client.user.findFirst();
  const username = user?.username;
  return username;
}
export default async function Home() {
  const username = await fetchData();
  return <div>Hii there {username}</div>;
}
