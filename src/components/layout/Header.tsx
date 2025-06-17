import React from 'react'
import LanguageButton from '../ui/LanguageButton'
import { ShieldIcon } from '../icons/icons'
import './Header.css'
import { useTranslation, Trans } from 'react-i18next'

interface HeaderProps {
  scrollToSection: (sectionId: string) => void
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  useTranslation()

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
            <Trans i18nKey="nav.earlyAccess"/>
          </button>
          <button className="nav-link" onClick={() => scrollToSection('how-it-works')}>
            <Trans i18nKey="nav.howItWorks"/>
          </button>
          <button className="nav-link" onClick={() => scrollToSection('benefits')}>
            <Trans i18nKey="nav.benefits"/>
          </button>
          <button className="nav-link" onClick={() => scrollToSection('register')}>
            <Trans i18nKey="nav.waitlist"/>
          </button>
          <button className="nav-link" onClick={() => scrollToSection('faq')}>
            <Trans i18nKey="nav.faq"/>
          </button>
        </nav>
        <div className="header-actions">
          <LanguageButton />
        </div>
      </div>
    </header>
  )
}

export default Header 