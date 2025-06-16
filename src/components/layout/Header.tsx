
import { ShieldIcon } from '../icons/icons'
import './Header.css'

interface HeaderProps {
  scrollToSection: (sectionId: string) => void
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">
            <ShieldIcon className="logo-icon-svg" />
          </div>
          <h1>HalalCheck AI</h1>
        </div>
        <nav className="nav-links">
          <button className="nav-link" onClick={() => scrollToSection('early-access')}>
            Early Access
          </button>
          <button className="nav-link" onClick={() => scrollToSection('how-it-works')}>
            How It Works
          </button>
          <button className="nav-link" onClick={() => scrollToSection('benefits')}>
            Benefits
          </button>
          <button className="nav-link" onClick={() => scrollToSection('register')}>
            Join Waitlist
          </button>
          <button className="nav-link" onClick={() => scrollToSection('faq')}>
            FAQ
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header 