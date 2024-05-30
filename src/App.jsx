import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Services from "./components/Services/Services";

function App() {

  return (
    <React.Fragment>
      <NavBar />
      <About />
      <Services />
    </React.Fragment>
  );
}

export default App;
