import React from 'react'
import './global.css'
import Header from "./components/layout/header.jsx";
import Home from './pages/Home.jsx'


function App() {

  return (
    <>
      <Header />
      <main className='bg-[#1e2358] min-h-screen flex items-center justify-center'>
        <Home />
      </main>
    </>
  )
}

export default App
