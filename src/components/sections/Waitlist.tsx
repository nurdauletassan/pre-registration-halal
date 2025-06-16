import type { FC } from 'react'
import { Card } from '../ui/Card'
import { MailIcon, ArrowRightIcon, ClockIcon, ShieldIcon, SparklesIcon } from '../icons/Icons'
import './Waitlist.css'

interface WaitlistProps {
  onSubmit: (e: React.FormEvent) => void
}

export const Waitlist: FC<WaitlistProps> = ({ onSubmit }) => {
  return (
    <section id="register" className="waitlist">
      <div className="waitlist-overlay"></div>
      <div className="waitlist-radial-1"></div>
      <div className="waitlist-radial-2"></div>

      <div className="waitlist-container">
        <div className="waitlist-content">
          <div className="waitlist-header">
            <h2 className="waitlist-title">Join the Waitlist</h2>
            <p className="waitlist-description">
              Be among the first to experience AI-powered halal verification. Get notified when we launch!
            </p>
          </div>

          <div className="waitlist-form-container">
            <Card className="waitlist-card">
              <form onSubmit={onSubmit} className="waitlist-form">
                <div className="waitlist-input-group">
                  <div className="waitlist-input-wrapper">
                    <MailIcon className="waitlist-input-icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      className="waitlist-input"
                      required
                    />
                  </div>

                  
                </div>
                <button type="submit" className="waitlist-button">
                    Get Early Access
                    <ArrowRightIcon className="waitlist-button-icon" />
                  </button>

                <div className="waitlist-terms">
                  <p className="waitlist-terms-text">
                    By signing up, you agree to our{" "}
                    <a href="/terms" className="waitlist-link">Terms of Service</a>{" "}
                    and{" "}
                    <a href="/privacy" className="waitlist-link">Privacy Policy</a>
                  </p>
                </div>

                <div className="waitlist-stats">
                  <div className="waitlist-stat">
                    <div className="waitlist-stat-value">1000+</div>
                    <div className="waitlist-stat-label">Early Users</div>
                  </div>
                  <div className="waitlist-stat">
                    <div className="waitlist-stat-value">99%</div>
                    <div className="waitlist-stat-label">Accuracy</div>
                  </div>
                  <div className="waitlist-stat">
                    <div className="waitlist-stat-value">24/7</div>
                    <div className="waitlist-stat-label">Available</div>
                  </div>
                </div>
              </form>
            </Card>

            <div className="waitlist-features">
              <div className="waitlist-feature">
                <ClockIcon className="waitlist-feature-icon" />
                <p className="waitlist-feature-text">Launch in Q2 2024</p>
              </div>
              <div className="waitlist-feature">
                <ShieldIcon className="waitlist-feature-icon" />
                <p className="waitlist-feature-text">100% Secure</p>
              </div>
              <div className="waitlist-feature">
                <SparklesIcon className="waitlist-feature-icon" />
                <p className="waitlist-feature-text">No Spam Ever</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 