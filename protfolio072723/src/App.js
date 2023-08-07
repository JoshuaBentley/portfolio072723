import './App.scss';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../src/components/Layout'
import Home from '../src/components/Home'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
// import Projects from './Components/Projects/index'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element= {<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="project" element={<Projects />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
