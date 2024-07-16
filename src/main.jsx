import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'

import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Features from './components/Features/Features.jsx'
import Menu from './components/Menu/Menu.jsx'
import Community from './components/Community/Community.jsx'

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
