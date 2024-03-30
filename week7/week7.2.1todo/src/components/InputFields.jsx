import React from "react";
import { description, title } from "../store/atoms/Todo";
import { useSetRecoilState } from "recoil";
import { styles } from "../styles/styles";
function InputFeilds() {
  const setTitle = useSetRecoilState(title);
  const setDescription = useSetRecoilState(description);
  return (
    <div>
      <input
        style={styles.input}
        type="text"
        placeholder="Enter Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        style={styles.input}
        type="text"
        placeholder="Enter Description"
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
}

export default InputFeilds;
