'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface RequestDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RequestDemoModal({ isOpen, onClose }: RequestDemoModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isOpen || !isMounted) return null

  return (
    <section id="modal-request-demo" className="modal-free-trial" style={{ display: 'block' }} suppressHydrationWarning>
      <div className="modal-free-trial-wrap">
        <div className="uui-container-small">
          <div className="uui-padding-vertical-xhuge-3">
            <div id="request-demo-close-modal" className="div-block-8 close-modal modal-trial-trigger-close" onClick={onClose}>
              <Image
                src="/images/6438e99f114dbd7f23beba1b_close.svg"
                width={30}
                height={30}
                alt="Close"
                className="image-13"
              />
            </div>
            <div className="uui-contact01_component w-form">
              <form 
                id="wf-form-REQUEST_A_DEMO" 
                name="wf-form-REQUEST_A_DEMO"
                data-name="REQUEST_A_DEMO"
                method="post"
                className="uui-contact01_form"
                data-wf-flow="20ef3fcda459f64a789a143a"
                data-wf-page-id="661aa88c01628457de17f5b2"
                data-wf-element-id="31fc7149-4305-3d9c-41ee-d50ba632c73b"
                aria-label="REQUEST_A_DEMO"
              >
                <div className="uui-text-align-center-2">
                  <div className="uui-max-width-large-3 align-center">
                    <h2 className="uui-heading-medium no-padding--bottom">
                      Request Demo
                    </h2>
                    <div className="uui-text-size-large-3">
                      Fill out the form below or contact us directly at
                      support@alphamizer.io.
                    </div>
                  </div>
                </div>
                <div className="uui-form-field-wrapper">
                  <label htmlFor="NAME-2" className="uui-field-label">Name</label>
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength={256}
                    name="NAME"
                    data-name="NAME"
                    placeholder="Your name"
                    type="text"
                    id="NAME-2"
                    required
                  />
                </div>
                <div className="uui-form-field-wrapper">
                  <label htmlFor="REQUEST_DEMO_PHONE" className="uui-field-label">Phone</label>
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength={256}
                    name="PHONE"
                    data-name="PHONE"
                    placeholder="Your phone number"
                    type="tel"
                    id="REQUEST_DEMO_PHONE"
                    required
                  />
                </div>
                <div className="uui-form-field-wrapper">
                  <label htmlFor="EMAIL" className="uui-field-label">Business Email</label>
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength={256}
                    name="EMAIL"
                    data-name="EMAIL"
                    placeholder="you@company.com"
                    type="email"
                    id="EMAIL"
                    required
                  />
                </div>
                <div className="uui-form-field-wrapper">
                  <label htmlFor="COMPANY" className="uui-field-label">Company</label>
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength={256}
                    name="COMPANY"
                    data-name="COMPANY"
                    placeholder="Company Name"
                    type="text"
                    id="COMPANY"
                    required
                  />
                </div>
                <div id="w-node-_31fc7149-4305-3d9c-41ee-d50ba632c73b-a632c71c" className="uui-form-button-wrapper">
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    id="w-node-_31fc7149-4305-3d9c-41ee-d50ba632c73c-a632c71c"
                    className="uui-button-2 w-button"
                    value="Request Demo"
                  />
                </div>
              </form>
              <div
                className="success-message w-form-done"
                tabIndex={-1}
                role="region"
                aria-label="REQUEST_A_DEMO success"
              >
                <div className="success-text">
                  Thank you. Your submission has been received.
                </div>
              </div>
              <div
                className="error-message w-form-fail"
                tabIndex={-1}
                role="region"
                aria-label="REQUEST_A_DEMO failure"
              >
                <div className="error-text">
                  Oops! Something went wrong while submitting the form.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
