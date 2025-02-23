// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import { BooksProvider } from './context/BooksContext'

function App() {
  return (
    <BooksProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:genre" element={<Books />} />
      </Routes>
    </Router>
    </BooksProvider>
  )
}

export default App
