import type { FC } from 'react'
import { Card } from '../ui/Card'
import { GiftIcon, UsersIcon, SparklesIcon, StarIcon } from '../icons/icons'
import './Benefits.css'
import { useTranslation, Trans } from 'react-i18next'

export const Benefits: FC = () => {
  useTranslation()

  return (
    <section id="benefits" className="benefits">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-title">
            <Trans i18nKey="benefits.title"/>
          </h2>
          <p className="benefits-description">
            <Trans i18nKey="benefits.description"/>
          </p>
        </div>

        <div className="benefits-grid">
          <Card className="benefits-card">
            <div className="benefits-icon-container">
              <GiftIcon className="benefits-icon" />
            </div>
            <h3 className="benefits-card-title">
              <Trans i18nKey="benefits.features.free.title"/>
            </h3>
            <p className="benefits-card-description">
              <Trans i18nKey="benefits.features.free.description"/>
            </p>
          </Card>

          <Card className="benefits-card">
            <div className="benefits-icon-container">
              <UsersIcon className="benefits-icon" />
            </div>
            <h3 className="benefits-card-title">
              <Trans i18nKey="benefits.features.support.title"/>
            </h3>
            <p className="benefits-card-description">
              <Trans i18nKey="benefits.features.support.description"/>
            </p>
          </Card>

          <Card className="benefits-card">
            <div className="benefits-icon-container">
              <SparklesIcon className="benefits-icon" />
            </div>
            <h3 className="benefits-card-title">
              <Trans i18nKey="benefits.features.beta.title"/>
            </h3>
            <p className="benefits-card-description">
              <Trans i18nKey="benefits.features.beta.description"/>
            </p>
          </Card>

          <Card className="benefits-card">
            <div className="benefits-icon-container">
              <StarIcon className="benefits-icon" />
            </div>
            <h3 className="benefits-card-title">
              <Trans i18nKey="benefits.features.discount.title"/>
            </h3>
            <p className="benefits-card-description">
              <Trans i18nKey="benefits.features.discount.description"/>
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
} 