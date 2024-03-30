import {
  RecoilRoot,
  useRecoilStateLoadable,
  useRecoilValueLoadable,
} from "recoil";
import { todosAtomFamily } from "./atom";
//useRecoilStateLoadable,useRecoilValueLoadable is used to display a message when a contents are no loaded
//it returns a object {contents , state}
//state has 2 values loading , hasValue
function App() {
  return (
    <div>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={2} />
        <Todo id={2} />
      </RecoilRoot>
    </div>
  );

  function Todo({ id }) {
    const [currentTodo, setCurrentTodo] = useRecoilStateLoadable(
      todosAtomFamily(id)
    );
    const value = useRecoilValueLoadable(todosAtomFamily(id));
    console.log(currentTodo);
    if (currentTodo.state == "loading") {
      return <h1>Loading....</h1>;
    } else if (currentTodo.state == "hasValue") {
      return (
        <>
          {currentTodo.contents.title}
          {currentTodo.contents.description}
        </>
      );
    } else if (currentTodo.state == "hasError") {
      return <h1>Error.....</h1>;
    }
  }
}
