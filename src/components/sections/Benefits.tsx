import type { FC } from 'react'
import { Card } from '../ui/Card'
import { GiftIcon, UsersIcon, SparklesIcon, StarIcon } from '../icons/icons'
import './Benefits.css'

export const Benefits: FC = () => {
  return (
    <section id="benefits" className="benefits">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-title">Early Access Benefits</h2>
          <p className="benefits-description">
            Join now and unlock exclusive perks before our official launch
          </p>
        </div>

        <div className="benefits-grid">
          <Card className="benefits-card">
            <div className="benefits-icon-container">
              <GiftIcon className="benefits-icon" />
            </div>
            <h3 className="benefits-card-title">3 Months Free</h3>
            <p className="benefits-card-description">Complete access to all premium features</p>
          </Card>

          <Card className="benefits-card">
            <div className="benefits-icon-container">
              <UsersIcon className="benefits-icon" />
            </div>
            <h3 className="benefits-card-title">Priority Support</h3>
            <p className="benefits-card-description">Direct line to our team for instant help</p>
          </Card>

          <Card className="benefits-card">
            <div className="benefits-icon-container">
              <SparklesIcon className="benefits-icon" />
            </div>
            <h3 className="benefits-card-title">Beta Features</h3>
            <p className="benefits-card-description">First access to new AI capabilities</p>
          </Card>

          <Card className="benefits-card">
            <div className="benefits-icon-container">
              <StarIcon className="benefits-icon" />
            </div>
            <h3 className="benefits-card-title">50% Discount</h3>
            <p className="benefits-card-description">Lifetime discount on all plans</p>
          </Card>
        </div>
      </div>
    </section>
  )
} 