import React from 'react'
import './App.css'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App(){
  return (
    <Router>
      <div className="page bg">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div className="content"><h1>404</h1><p>Page not found.</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
