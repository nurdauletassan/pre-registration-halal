import type { FC } from 'react'
import { Card } from '../ui/Card'
import { MailIcon, ClockIcon, ShieldIcon, SparklesIcon } from '../icons/icons'
import './Waitlist.css'
import { useTranslation, Trans } from 'react-i18next'
import { Button } from '../ui/Button'

interface WaitlistProps {
  onSubmit: (e: React.FormEvent) => void
  email: string
  setEmail: (value: string) => void
}

export const Waitlist: FC<WaitlistProps> = ({ onSubmit, email, setEmail }) => {
  const { t } = useTranslation()

  return (
    <section id="register" className="waitlist">
      <div className="waitlist-overlay"></div>
      <div className="waitlist-radial-1"></div>
      <div className="waitlist-radial-2"></div>

      <div className="waitlist-container">
        <div className="waitlist-content">
          <div className="waitlist-header">
            <h2 className="waitlist-title">
              <Trans i18nKey="waitlist.title" />
            </h2>
            <p className="waitlist-description">
              <Trans i18nKey="waitlist.description" />
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('waitlist.emailPlaceholder')}
                      className="waitlist-input"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="waitlist-button">
                  <Trans i18nKey="waitlist.submit" />
                </Button>

                <div className="waitlist-terms">
                  <p className="waitlist-terms-text">
                    <Trans
                      i18nKey="waitlist.terms"
                      components={{
                        terms: (
                          <a
                            href="/terms"
                            className="text-emerald-600 hover:underline cursor-pointer transition"
                          />
                        ),
                        privacy: (
                          <a
                            href="/privacy"
                            className="text-emerald-600 hover:underline cursor-pointer transition"
                          />
                        )
                      }}
                    />
                  </p>
                </div>

                <div className="waitlist-stats">
                  <div className="waitlist-stat">
                    <div className="waitlist-stat-value">
                      <Trans i18nKey="waitlist.stats.users" />
                    </div>
                    <div className="waitlist-stat-label">
                      <Trans i18nKey="waitlist.stats.usersLabel" />
                    </div>
                  </div>
                  <div className="waitlist-stat">
                    <div className="waitlist-stat-value">
                      <Trans i18nKey="waitlist.stats.accuracy" />
                    </div>
                    <div className="waitlist-stat-label">
                      <Trans i18nKey="waitlist.stats.accuracyLabel" />
                    </div>
                  </div>
                  <div className="waitlist-stat">
                    <div className="waitlist-stat-value">
                      <Trans i18nKey="waitlist.stats.products" />
                    </div>
                    <div className="waitlist-stat-label">
                      <Trans i18nKey="waitlist.stats.productsLabel" />
                    </div>
                  </div>
                </div>
              </form>
            </Card>

            <div className="waitlist-features">
              <div className="waitlist-feature">
                <ClockIcon className="waitlist-feature-icon" />
                <p className="waitlist-feature-text">
                  <Trans i18nKey="waitlist.features.launch" />
                </p>
              </div>
              <div className="waitlist-feature">
                <ShieldIcon className="waitlist-feature-icon" />
                <p className="waitlist-feature-text">
                  <Trans i18nKey="waitlist.features.secure" />
                </p>
              </div>
              <div className="waitlist-feature">
                <SparklesIcon className="waitlist-feature-icon" />
                <p className="waitlist-feature-text">
                  <Trans i18nKey="waitlist.features.noSpam" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
