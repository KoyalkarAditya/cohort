import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodos } from "../store/atoms/Filter";
import { styles } from "../styles/styles";

function RenderTodos() {
  const allTodos = useRecoilValue(filteredTodos);
  return (
    <div style={styles.container}>
      {allTodos.map((todo, index) => {
        const { title, description } = todo;
        return (
          <div key={index} style={styles.todoContainer}>
            <h5 style={styles.title}>{title}</h5>
            <h6 style={styles.description}>{description}</h6>
          </div>
        );
      })}
    </div>
  );
}

export default RenderTodos;
