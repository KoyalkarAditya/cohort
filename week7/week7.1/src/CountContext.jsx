import { createContext } from "react";
export const CountContext = createContext({});
// we are writing this in different file because if we define this app.jsx we have to define a hook under a component and if we define this hook inside the app component it will be local to that component
