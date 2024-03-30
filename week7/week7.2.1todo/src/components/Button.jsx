import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { description, title } from "../store/atoms/Todo";
import { Todos } from "../store/atoms/Todos";
import { styles } from "../styles/styles";
function Button() {
  const titleValue = useRecoilValue(title);
  const descriptionValue = useRecoilValue(description);
  const setTodos = useSetRecoilState(Todos);
  const allTodos = useRecoilValue(Todos);
  function AddTodo() {
    setTodos([
      ...allTodos,
      {
        title: titleValue,
        description: descriptionValue,
      },
    ]);
  }
  return (
    <div>
      <button style={styles.button} onClick={AddTodo}>
        ADD
      </button>
    </div>
  );
}

export default Button;
