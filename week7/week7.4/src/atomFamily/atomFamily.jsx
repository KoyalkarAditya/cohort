//the problem with atoms is we cannot create a atom dynamically
//example a atom cannot be created uniquely and dynamically at same time
//When you have a dynamic list of items, such as a list of todos or a set of users, you can use atomFamily to create an atom for each item in the list. This way, each item can have its own independent state.
//if yoy only use a atom and set its default as todo array then if one todo changes all the components as they are directly dependent on array re-renders
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { todosAtomFamily } from "./atom";
import { useEffect } from "react";

//atomFamily is Like allTodos array ,,when ever a single todo is created it will return a unique atom state or id for it

function App() {
  return (
    <div>
      <RecoilRoot>
        <UpdateTodo />
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={2} />
      </RecoilRoot>
    </div>
  );
  function UpdateTodo() {
    const updateTodo = useSetRecoilState(todosAtomFamily(2));
    useEffect(() => {
      setTimeout(() => {
        updateTodo({
          id: "go to gym only brooo",
          description: "bad boy....",
        });
      }, 5000);
    }, []);
    return <></>;
  }
  function Todo({ id }) {
    const currentTodo = useRecoilValue(todosAtomFamily(id));
    return (
      <>
        {currentTodo.title}
        {currentTodo.description}
      </>
    );
  }
}
