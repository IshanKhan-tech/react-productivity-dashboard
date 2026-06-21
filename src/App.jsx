import React from 'react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className='h-screen w-full bg-[#fff] px-4'>
      <Navbar/>
      <Dashboard/>
    </div>
  )
}

export default App