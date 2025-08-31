'use client'

interface GetStartedProps {
  onRequestDemo: () => void
}

export default function GetStarted({ onRequestDemo }: GetStartedProps) {
  return (
    <section className="a-get-started-section spark-primary-color-background">
      <div className="spark-container-2 spark-centered-content spark-spacing-normal w-container">
        <h2 className="no-padding-bottom headline-h2">Reach Out to Learn More</h2>
        <p className="spark-hero-sub-paragraph no-padding-bottom">
          Understand the lens of residual performance, how you &amp; others
          are positioned, what extremes are driving today&apos;s markets - and what
          you can do about it. An analytical revolution is quietly underway in
          investment management. Join us.
        </p>
        <div className="modal-trigger">
          <a href="#" className="button-2-copy-copy-copy js-open-modal w-button" onClick={onRequestDemo}>
            Request Demo
          </a>
        </div>
      </div>
    </section>
  )
}
