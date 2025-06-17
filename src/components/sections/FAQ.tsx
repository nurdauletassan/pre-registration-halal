import type { FC } from 'react'
import './FAQ.css'
import { useTranslation, Trans } from 'react-i18next'

const FAQ: FC = () => {
  useTranslation()

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">
            <Trans i18nKey="faq.title"/>
          </h2>
          <p className="faq-description">
            <Trans i18nKey="faq.description"/>
          </p>
        </div>

        <div className="faq-grid">
          <div className="faq-card">
            <h3 className="faq-question">
              <Trans i18nKey="faq.questions.restaurants.question"/>
            </h3>
            <p className="faq-answer">
              <Trans i18nKey="faq.questions.restaurants.answer"/>
            </p>
          </div>

          <div className="faq-card">
            <h3 className="faq-question">
              <Trans i18nKey="faq.questions.accuracy.question"/>
            </h3>
            <p className="faq-answer">
              <Trans i18nKey="faq.questions.accuracy.answer"/>
            </p>
          </div>

          <div className="faq-card">
            <h3 className="faq-question">
              <Trans i18nKey="faq.questions.availability.question"/>
            </h3>
            <p className="faq-answer">
              <Trans i18nKey="faq.questions.availability.answer"/>
            </p>
          </div>

          <div className="faq-card">
            <h3 className="faq-question">
              <Trans i18nKey="faq.questions.cost.question"/>
            </h3>
            <p className="faq-answer">
              <Trans i18nKey="faq.questions.cost.answer"/>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ 