import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Details from './Components/Details'
import Footer from './Components/Footer'

export default function Layout() {
  return (
    <>
    <NavBar/>
      <main className='bg-gray-300 flex justify-center items-center p-[18px]'>
        <Outlet/>
      </main>
    <Details/>
    <Footer/>
    
    </>
  )
}
