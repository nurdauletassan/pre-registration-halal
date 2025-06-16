import type { FC } from 'react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { ArrowRightIcon, CheckCircleIcon, ZapIcon, ShieldIcon } from '../icons/icons'
import './Hero.css'

interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

export const Hero: FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="early-access" className="hero">
      <div className="hero-content">
        <Badge className="hero-badge">🚀 Coming Soon - Early Access Available</Badge>
        <h1 className="hero-title">
          AI-Powered <span>Halal Product</span> Verification
        </h1>
        <p className="hero-description">
          Get early access to our AI-powered halal verification system. 
          Scan products, get instant verification, and shop with confidence.
        </p>
        <div className="hero-note">
          <p>✨ Join our exclusive early access program and be among the first to experience the future of halal verification</p>
        </div>
        <div className="hero-buttons">
          <Button
            onClick={() => scrollToSection("register")}
            className="hero-button"
          >
            Get Early Access
            <ArrowRightIcon className="hero-button-icon" />
          </Button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <CheckCircleIcon className="hero-stat-icon" />
            <span className="hero-stat-text">99% Accuracy</span>
          </div>
          <div className="hero-stat">
            <ZapIcon className="hero-stat-icon" />
            <span className="hero-stat-text">Instant Results</span>
          </div>
          <div className="hero-stat">
            <ShieldIcon className="hero-stat-icon" />
            <span className="hero-stat-text">Trusted by 1000+</span>
          </div>
        </div>
      </div>
    </section>
  )
} 