import type { FC } from 'react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { ArrowRightIcon, CheckCircleIcon, ZapIcon, ShieldIcon } from '../icons/icons'
import './Hero.css'
import { useTranslation, Trans } from 'react-i18next'


interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

export const Hero: FC<HeroProps> = ({ scrollToSection }) => {
  const { t } = useTranslation()

  return (
    <section id="early-access" className="hero">
      <div className="hero-content">
        <Badge className="hero-badge">
          <Trans i18nKey="hero.earlyAccess"/>
        </Badge>
        <h1 className="hero-title">
          <Trans
          i18nKey="hero.title"
          components={{
            strong: <span className="text-emerald-600 font-extrabold" />,
            highlight: <span className="text-orange-500" />
          }}
      />
        </h1>
        <p className="hero-description">
          <Trans i18nKey="hero.description"/>
        </p>
        <div className="hero-note">
            <Trans i18nKey="hero.note"/>
        </div>
        <div className="hero-buttons">
          <Button
            onClick={() => scrollToSection("register")}
            className="hero-button"
          >
            {t('hero.getAccess')}
            <ArrowRightIcon className="hero-button-icon" />
          </Button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <CheckCircleIcon className="hero-stat-icon" />
            <span className="hero-stat-text">
              <Trans i18nKey="hero.stats.accuracy"/>
              </span>
          </div>
          <div className="hero-stat">
            <ZapIcon className="hero-stat-icon" />
            <span className="hero-stat-text">
            <Trans i18nKey="hero.stats.instant"/>
            </span>
          </div>
          <div className="hero-stat">
            <ShieldIcon className="hero-stat-icon" />
            <span className="hero-stat-text">
            <Trans i18nKey="hero.stats.trusted"/>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
} 