import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MobileMenuModal from '../components/MobileMenuModal'
import { useState } from 'react'
import About from '../components/About'
import Skills from '../components/Skills'
import Resume from '../components/Resume'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <>
      <div className={"px-4 mx-auto overflow-x-hidden  max-h-auto text-white"}>
        <Head>
          <title>Younes Zahzouh</title>
          <meta name="description" content="Younes Zahzouh Portfolio" />
          <link rel="icon" href="/favicon.ico" />
          <script src='https://www.goat1000.com/tagcanvas.min.js' />
        </Head>

        <Navbar />
        <div className='container mx-auto  text-white'>

          <Hero />

          <About />

          <Skills />

          <Resume />

          <Work />

          <Contact />
        </div>


        <Footer />

      </div>
    </>
  )
}
