import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Errorpage from './Pages/Errorpage.jsx'
import Table from './components/Table/Table.jsx'


import { createBrowserRouter,BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";



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
        {/* <NavBar /> */}
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
