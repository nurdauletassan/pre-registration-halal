import { ShieldIcon } from '../icons/icons'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <ShieldIcon className="footer-icon" />
            </div>
            <span className="footer-logo-text">
              HalalCheck AI
            </span>
          </div>

          <div className="footer-copyright">
            © 2024 HalalCheck AI. All rights reserved.
          </div>

          <nav className="footer-nav">
            <a href="/terms" className="footer-link">
              Terms
            </a>
            <a href="/privacy" className="footer-link">
              Privacy
            </a>
            <a href="/contact" className="footer-link">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
} 