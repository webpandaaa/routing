import React from 'react'
import {Routes , Route } from "react-router-dom";

import Nav  from '../components/Nav'
import Home from '../components/Home'
import Contact from '../components/Contact'
import About from '../components/About'
import Details from '../components/Details'
import Outlet from '../components/Outlet'
import Image from '../components/Image'

const RoutesComponents = () => {
  return (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/image" element={<Image />} />



      </Routes>
  )
}

export default RoutesComponents
