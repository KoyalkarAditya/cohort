import React, { useState } from "react";

function App() {
  return (
    <div>
      <CardWrapper InnerComponent={TextComponent} />
      <CardWrapper2>hello there</CardWrapper2>
    </div>
  );
}
function TextComponent() {
  return <div>hi there</div>;
}
function CardWrapper2({ children }) {
  // children represents the text written between the wrapper component
  return (
    <div
      style={{
        border: "2px solid black",
        padding: 20,
      }}
    >
      {children}
    </div>
  );
}
function CardWrapper({ InnerComponent }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: 20,
      }}
    >
      <InnerComponent />
    </div>
  );
}
export default App;
