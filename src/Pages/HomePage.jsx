import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Highlights from '../Components/Highlights'
import Products from '../Components/Products'
import Features from '../Components/Features'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Enquiry from '../Components/Enquiry'

export default function HomePage() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <About/>
        <Highlights/>
        <Products/>
        {/* <Enquiry/> */}
        <Features/>
        <Contact/>
        <Footer/>
    </div>
  )
}
