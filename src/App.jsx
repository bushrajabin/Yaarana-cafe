import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <NavBar />
    </React.Fragment>
  );
}

export default App;
