import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/footer'
import MobileNav from '../Components/mobileNav'
import Navbar from '../Components/Navbar'

const RootLayout = () => {
  return (
    <>
<Navbar />
<MobileNav />
<div className='container'>
    <Outlet />
</div>
<Footer />
    </>
  )
}

export default RootLayout