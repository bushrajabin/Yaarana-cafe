// App.js
import React from "react";
import Table from "./components/Table/Table";
import Home from "./Pages/Home";
import Errorpage from './Pages/Errorpage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import NavBar from './components/NavBar/NavBar'


const App = () => {
  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<Errorpage/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Table />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
