import type { FC } from 'react'
import { ZapIcon, ShieldIcon, CheckCircleIcon } from './icons'

export const Features: FC = () => {
  return (
    <section className="features">
      <div className="feature">
        <div className="feature-icon">
          <ZapIcon />
        </div>
        <h3>Instant Verification</h3>
        <p>Get instant halal verification for any product with our AI-powered scanner</p>
      </div>
      <div className="feature">
        <div className="feature-icon">
          <ShieldIcon />
        </div>
        <h3>Trusted Database</h3>
        <p>Access our comprehensive database of verified halal products</p>
      </div>
      <div className="feature">
        <div className="feature-icon">
          <CheckCircleIcon />
        </div>
        <h3>Easy to Use</h3>
        <p>Simple and intuitive interface for quick product verification</p>
      </div>
    </section>
  )
} 