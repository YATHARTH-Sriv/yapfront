import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Info from './Info'
import CoreValues from './Helpers/CoreValues'
import FAQs from './FAQs'
import Footer from './Footer'

function Landingpage() {
  return (
     <main className="min-h-screen w-full bg-black relative overflow-hidden">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="rooms">
        <Info />
      </section>
      <section id="core-values">
        <CoreValues />
      </section>
      <section id="about">
        <FAQs/>
        <Footer />
      </section>
    </main>
  )
}

export default Landingpage
