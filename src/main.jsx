import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes , Outlet } from "react-router-dom";
import App from './App.jsx'
import './index.css'

import Home from './components/Home'
import About from './components/About'
import Features from './components/Features'
import Menu from './components/Menu'
import Community from './components/Community'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="features" element={<Features />} />
      <Route path="menu" element={<Menu />} />
      <Route path="community" element={<Community />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
