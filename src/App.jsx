// App.js
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Table from "./components/Table/Table";
import Home from "./Pages/Home";
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import Errorpage from './Pages/Errorpage'


const App = () => {

  
  return (
    <>
      {/* <NavBar /> */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
