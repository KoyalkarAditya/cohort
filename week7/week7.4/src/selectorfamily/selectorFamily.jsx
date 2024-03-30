import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { todosAtomFamily } from "./selectorfamily/atom";
//selector family is used when we have to actually hit the backend and render
//as we have asynchronous data fetching we need to use a selectorFamily
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
    const currentTodo = useRecoilValue(todosAtomFamily(id));
    return (
      <>
        {currentTodo.title}
        {currentTodo.description}
      </>
    );
  }
}
