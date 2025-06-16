import type { FC } from 'react'
import { Card } from '../ui/Card'
import { CameraIcon, SparklesIcon, CheckCircleIcon } from '../icons/icons'
import './HowItWorks.css'

export const HowItWorks: FC = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">How It Works</h2>
          <p className="how-it-works-description">
            Three simple steps to verify any product's halal status
          </p>
        </div>

        <div className="how-it-works-grid">
          <Card className="how-it-works-card">
            <div className="how-it-works-icon-container">
              <CameraIcon className="how-it-works-icon" />
            </div>
            <h3 className="how-it-works-card-title">Scan Product</h3>
            <p className="how-it-works-card-description">
              Take a photo of the ingredient list or enter them manually
            </p>
          </Card>

          <Card className="how-it-works-card">
            <div className="how-it-works-icon-container">
              <SparklesIcon className="how-it-works-icon" />
            </div>
            <h3 className="how-it-works-card-title">AI Analysis</h3>
            <p className="how-it-works-card-description">
              Our AI analyzes ingredients against halal certification databases
            </p>
          </Card>

          <Card className="how-it-works-card">
            <div className="how-it-works-icon-container">
              <CheckCircleIcon className="how-it-works-icon" />
            </div>
            <h3 className="how-it-works-card-title">Get Results</h3>
            <p className="how-it-works-card-description">
              Receive instant verification with detailed ingredient analysis
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
} 