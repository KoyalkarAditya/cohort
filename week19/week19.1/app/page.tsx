import ReValidate from "./lib/actions/action1";

export default async function Home() {
  // const res = await fetch("https://sum-server.100xdevs.com/todos", {
  //   next: {
  //     revalidate: 5,
  //   },
  // });
  const res = await fetch("https://sum-server.100xdevs.com/todos", {
    next: {
      tags: ["todos"],
    },
  });
  const data = await res.json();
  ReValidate();
  return (
    <div>
      {data.todos.map((todo: any) => (
        <div id={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}
