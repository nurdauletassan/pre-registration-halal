import type { FC } from 'react'
import { Card } from '../ui/Card'
import { CameraIcon, SparklesIcon, CheckCircleIcon } from '../icons/icons'
import './HowItWorks.css'
import { useTranslation, Trans } from 'react-i18next'

export const HowItWorks: FC = () => {
  useTranslation()
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">
          <Trans i18nKey="howItWorks.title"/>
          </h2>
          <p className="how-it-works-description">
          <Trans i18nKey="howItWorks.description"/>
          </p>
        </div>

        <div className="how-it-works-grid">
          <Card className="how-it-works-card">
            <div className="how-it-works-icon-container">
              <CameraIcon className="how-it-works-icon" />
            </div>
            <h3 className="how-it-works-card-title">
            <Trans i18nKey="howItWorks.steps.scan.title"/>
            </h3>
            <p className="how-it-works-card-description">
            <Trans i18nKey="howItWorks.steps.scan.description"/>
            </p>
          </Card>

          <Card className="how-it-works-card">
            <div className="how-it-works-icon-container">
              <SparklesIcon className="how-it-works-icon" />
            </div>
            <h3 className="how-it-works-card-title">
            <Trans i18nKey="howItWorks.steps.analyze.title"/>
            </h3>
            <p className="how-it-works-card-description">
              <Trans i18nKey="howItWorks.steps.analyze.description"/>
            </p>
          </Card>

          <Card className="how-it-works-card">
            <div className="how-it-works-icon-container">
              <CheckCircleIcon className="how-it-works-icon" />
            </div>
            <h3 className="how-it-works-card-title">
            <Trans i18nKey="howItWorks.steps.verify.title"/>
            </h3>
            <p className="how-it-works-card-description">
            <Trans i18nKey="howItWorks.steps.verify.description"/>
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
} 