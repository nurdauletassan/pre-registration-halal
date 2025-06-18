import './i18n';
import './App.css'
import { useState } from 'react'
import Header from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { HowItWorks } from './components/sections/HowItWorks'
import { Benefits } from './components/sections/Benefits'
import { Waitlist } from './components/sections/Waitlist'
import FAQ from './components/sections/FAQ'
import { Footer } from './components/layout/Footer'
import { createClient } from '@supabase/supabase-js'
import { Toaster, toast } from 'react-hot-toast'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
)

function App() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast.error('Введите email')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Введите корректный email')
      return
    }

    try {
      const { error } = await supabase.from('waitlist').insert({ email })
      if (error) {
        if (error.code === '23505') {
          toast.error('Этот email уже зарегистрирован.')
        } else {
          toast.error('Произошла ошибка. Попробуйте ещё раз.')
        }
      } else {
        toast.success('Вы успешно зарегистрированы!')
        setEmail('')
      }
    } catch {
      toast.error('Ошибка соединения с сервером.')
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      <Toaster position="top-right" reverseOrder={false} />
      <Header scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <HowItWorks />
        <Benefits />
        <Waitlist 
          onSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
        />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
