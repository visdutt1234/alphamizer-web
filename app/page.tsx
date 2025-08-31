'use client'

import { useState } from 'react'      
import Navigation from '../components/Navigation'     
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import KeyNumbers from '../components/KeyNumbers'
import ClientExperiences from '../components/ClientExperiences'
import HowItWorks from '../components/HowItWorks'
import WithAlphamizer from '../components/WithAlphamizer'
import WhyAlphamizer from '../components/WhyAlphamizer'
import Quote from '../components/Quote'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'
import RequestDemoModal from '../components/RequestDemoModal'
import ContactUsModal from '../components/ContactUsModal'

export default function Home() {
  const [isRequestDemoOpen, setIsRequestDemoOpen] = useState(false)
  const [isContactUsOpen, setIsContactUsOpen] = useState(false)

  const openRequestDemo = () => setIsRequestDemoOpen(true)
  const closeRequestDemo = () => setIsRequestDemoOpen(false)
  const openContactUs = () => setIsContactUsOpen(true)
  const closeContactUs = () => setIsContactUsOpen(false)

  return (
    <main>
      <Navigation 
        onRequestDemo={openRequestDemo}
        onContactUs={openContactUs}
      />
      
      <Hero onRequestDemo={openRequestDemo} />
      
      <Partners />
      
      <KeyNumbers />
      
      <ClientExperiences />
      
      <HowItWorks />
      
      <WithAlphamizer />
      
      <WhyAlphamizer />
      
      <Quote />
      
      <GetStarted onRequestDemo={openRequestDemo} />
      
      <Footer 
        onRequestDemo={openRequestDemo}
        onContactUs={openContactUs}
      />

      <RequestDemoModal 
        isOpen={isRequestDemoOpen}
        onClose={closeRequestDemo}
      />

      <ContactUsModal 
        isOpen={isContactUsOpen}
        onClose={closeContactUs}
      />
    </main>
  )
}
