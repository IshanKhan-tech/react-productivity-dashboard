import React from 'react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from "react-router-dom";
import Notes from './pages/Notes';
import Quotes from './pages/Quotes';

const App = () => {
  return (
    <div className=' w-full bg-[#fff] px-4 mt-19'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
      <Route path="/notes" element={<Notes/>} />
      <Route path="/quotes" element={<Quotes/>} />
      </Routes>
    </div>
  )
}

export default App