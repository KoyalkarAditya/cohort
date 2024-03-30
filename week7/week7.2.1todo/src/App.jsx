import { useState } from "react";
import "./App.css";
import InputFeilds from "./components/InputFields";
import Button from "./components/Button";
import { RecoilRoot } from "recoil";
import RenderTodos from "./components/RenderTodos";
import FilterTodos from "./components/FilterTodos";
import { styles } from "./styles/styles";
//todo application
//2 inputs title,description
//button
//todos => atom
//filter => atom
//selector (the current set of todos)
function App() {
  return (
    <div>
      <RecoilRoot>
        <InputFeilds />
        <div style={styles.div}>
          <Button />
          <FilterTodos />
        </div>

        <RenderTodos />
      </RecoilRoot>
    </div>
  );
}

export default App;
