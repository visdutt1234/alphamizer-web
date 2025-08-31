'use client'

import Image from 'next/image'

interface HeroProps {
  onRequestDemo: () => void
}

export default function Hero({ onRequestDemo }: HeroProps) {
  return (
    <div id="main" className="main-content">
      <section className="content-section padded hero">
        <div className="w-layout-blockcontainer content-section--container hero-section w-container">
          <h1 id="w-node-ecce9ac8-362b-fd29-c979-d0c19b0153bb-9b0153b9" className="headline-h1">
            ‍<span className="highlighted">
              Idio, Crowding, <br />Risk, &nbsp;Performance
            </span>
          </h1>
          
          <p id="w-node-ecce9ac8-362b-fd29-c979-d0c19b0153bf-9b0153b9" className="paragraph-b1">
            Alphamizer enables institutional investors to understand portfolio
            risks, decompose single stock &amp; book performance, drill into
            crowding, and isolate idiosyncratic differentiation. Built on our
            crowding, ownership, factor risk, and performance datasets.
          </p>
          
          <div id="w-node-ecce9ac8-362b-fd29-c979-d0c19b0153c3-9b0153b9" className="w-layout-hflex hero-buttons--container">
            <div id="request-demo-button" className="modal-trigger">
              <a href="#" className="button--primary w-button" onClick={onRequestDemo}>
                Request Demo
              </a>
            </div>
            
            <a href="#how-it-works" className="button--link-forward blue w-inline-block">
              <div className="paragraph-b1 semibold blue">Learn More</div>
              <div className="w-embed">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width="17"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="path-1-outside-1_1893_9982"
                      maskUnits="userSpaceOnUse"
                      x="0.102539"
                      y="-0.25"
                      width="17"
                      height="15"
                      fill="black"
                    >
                      <rect
                        fill="white"
                        x="0.102539"
                        y="-0.25"
                        width="17"
                        height="15"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.92569 0.994078C7.56301 1.31951 7.56301 1.84715 7.92569 2.17259L12.7966 6.54329H1.93587C1.47563 6.54329 1.10254 6.91639 1.10254 7.37663C1.10254 7.83686 1.47564 8.20996 1.93587 8.20996H12.7991L7.92569 12.5829C7.56301 12.9084 7.56301 13.436 7.92569 13.7615C8.28837 14.0869 8.8764 14.0869 9.23908 13.7615L15.5599 8.08975C15.6431 8.03928 15.7168 7.97466 15.7776 7.89921C15.9471 7.70614 16.008 7.46137 15.9603 7.23116C15.9405 7.12804 15.899 7.02763 15.8358 6.93582C15.765 6.82234 15.6675 6.72714 15.5523 6.65893L9.23908 0.994078C8.8764 0.668641 8.28837 0.668641 7.92569 0.994078Z"
                      />
                    </mask>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.92569 0.994078C7.56301 1.31951 7.56301 1.84715 7.92569 2.17259L12.7966 6.54329H1.93587C1.47563 6.54329 1.10254 6.91639 1.10254 7.37663C1.10254 7.83686 1.47564 8.20996 1.93587 8.20996H12.7991L7.92569 12.5829C7.56301 12.9084 7.56301 13.436 7.92569 13.7615C8.28837 14.0869 8.8764 14.0869 9.23908 13.7615L15.5599 8.08975C15.6431 8.03928 15.7168 7.97466 15.7776 7.89921C15.9471 7.70614 16.008 7.46137 15.9603 7.23116C15.9405 7.12804 15.899 7.02763 15.8358 6.93582C15.765 6.82234 15.6675 6.72714 15.5523 6.65893L9.23908 0.994078C8.8764 0.668641 8.28837 0.668641 7.92569 0.994078Z"
                      fill="#14578C"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
          
          <div id="w-node-ecce9ac8-362b-fd29-c979-d0c19b0153c6-9b0153b9" className="hero-content-image">
            <Image
              src="/images/662147fb1edd36a700fb6fea_group_201321315270.png"
              width={600}
              height={400}
              alt="Produce Screenshot"
              className="image-20"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
