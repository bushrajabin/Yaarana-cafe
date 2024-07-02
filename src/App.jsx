// App.js
import React from "react";
import { createBrowserRouter,BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Table from "./components/Table/Table";
import Home from "./Pages/Home";
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import Errorpage from './Pages/Errorpage'


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <NavBar />
          <Errorpage />
        </>
      ),
    },
    {
      path: "/table",
      element: (
        <>
          <NavBar />
          <Table />


        </>
      ),
    },

  ]);
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
