// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Table from "./components/Table/Table";
import Home from "./Pages/Home";
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/table" element={
          <>
            <NavBar />
            <Table />
            <Footer />

          </>

        } />

      </Routes>
    </Router>
  );
};

export default App;
