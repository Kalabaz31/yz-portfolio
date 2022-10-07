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

export default function Home() {

  return (
    <>
      <div className={"container mx-auto  h-screen max-h-auto text-white"}>
        <Head>
          <title>Younes Zahzouh</title>
          <meta name="description" content="Younes Zahzouh Portfolio" />
          <link rel="icon" href="/favicon.ico" />
          <script src='https://www.goat1000.com/tagcanvas.min.js' />
        </Head>

        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Resume />

        <Work />

      </div>
    </>
  )
}
