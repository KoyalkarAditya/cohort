import React from "react";
import { useSetRecoilState } from "recoil";
import { filter } from "../store/atoms/Filter";
import { styles } from "../styles/styles";

function FilterTodos() {
  const setFilter = useSetRecoilState(filter);
  return (
    <div>
      <input
        style={styles.input}
        type="text"
        placeholder="filter todo"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

export default FilterTodos;
