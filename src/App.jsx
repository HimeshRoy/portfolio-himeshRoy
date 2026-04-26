import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout'

import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Journey from './pages/Journey';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route exect path='projects' element={<Projects/>} />
        <Route exect path='journey' element={<Journey/>} />
        <Route exect path='contact' element={<Contact/>} />
      </Route>
    </Routes>
  )
}

export default App