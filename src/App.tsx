import './i18n';
import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { HowItWorks } from './components/sections/HowItWorks'
import { Benefits } from './components/sections/Benefits'
import { Waitlist } from './components/sections/Waitlist'
import FAQ from './components/sections/FAQ'
import { Footer } from './components/layout/Footer'

function App() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError('Please enter your email address')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    setError(error)
    setSuccess(success)
    setEmail('')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      <Header scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <HowItWorks />
        <Benefits />
        <Waitlist onSubmit={handleSubmit} />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App