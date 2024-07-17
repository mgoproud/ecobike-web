import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'

import Home from './components/Home/Home'
import About from './components/About/About'
import Features from './components/Features/Features'
import Menu from './components/Menu/Menu'
import Community from './components/Community/Community'
import MenuItem from './components/Menu/MenuItem';
import MenuContextProvider from './contexts/MenuContext';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="features" element={<Features />} />
      <Route path='menu' element={<Menu />} />
        <Route path="menu/:name" element={<MenuItem />} />
      <Route path="community" element={<Community />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <MenuContextProvider>
      <RouterProvider router={router} />
    </MenuContextProvider>
  </React.StrictMode>,
)
