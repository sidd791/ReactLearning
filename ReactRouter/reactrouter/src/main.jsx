import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from "./Layout.jsx"
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from "./components/Contact/Contact.jsx"
import { RouterProvider } from 'react-router-dom'
import Github from './components/Github/Github.jsx'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path = "github" element = {<Github/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {routes} />
  </React.StrictMode>,
)
