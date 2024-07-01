import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Reviews from "./components/review/Reviews";
import Table from "./components/Table/Table";
import Footer from "./components/Footer/Footer";
function App() {

  return (
    <React.Fragment>
      {/* <NavBar /> */}
      <About />
      <Services />
      {/* <Reviews /> */}
      {/* <Table/> */}
      {/* <Footer/> */}

    </React.Fragment>
  );
}

export default App;
