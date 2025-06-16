import type { FC } from 'react'
import './FAQ.css'

const FAQ: FC = () => {
  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-description">Everything you need to know about HalalCheck AI</p>
        </div>

        <div className="faq-grid">
          <div className="faq-card">
            <h3 className="faq-question">Do you check restaurants?</h3>
            <p className="faq-answer">
              No, we specialize exclusively in product verification. We analyze ingredients in packaged foods,
              beverages, and consumer products - not restaurant meals or prepared foods.
            </p>
          </div>

          <div className="faq-card">
            <h3 className="faq-question">How accurate is the AI?</h3>
            <p className="faq-answer">
              Our AI achieves 99% accuracy by cross-referencing multiple halal certification databases and
              continuously learning from expert reviews and user feedback.
            </p>
          </div>

          <div className="faq-card">
            <h3 className="faq-question">When will it be available?</h3>
            <p className="faq-answer">
              We're launching in Q2 2024. Early access users will get the app 30 days before the public release,
              plus exclusive benefits.
            </p>
          </div>

          <div className="faq-card">
            <h3 className="faq-question">Is there a cost?</h3>
            <p className="faq-answer">
              Basic scanning is free forever. Premium features like detailed reports and bulk scanning require a
              subscription, but early users get 50% off for life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ 