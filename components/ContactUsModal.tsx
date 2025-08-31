'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface ContactUsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactUsModal({ isOpen, onClose }: ContactUsModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isOpen || !isMounted) return null

  return (
    <section id="modal-contact-us" className="modal-contact" style={{ display: 'block' }} suppressHydrationWarning>
      <div className="modal-contact-wrap">
        <div className="uui-container-small">
          <div className="uui-padding-vertical-xhuge-3">
            <div id="contact-us-close-modal" className="div-block-8 close-modal modal-contact-trigger-close" onClick={onClose}>
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
                id="wf-form-CONTACT_US" 
                name="wf-form-CONTACT_US"
                data-name="CONTACT_US"
                method="post"
                className="uui-contact01_form"
                data-wf-flow="20ef3fcda459f64a789a143a"
                data-wf-page-id="661aa88c01628457de17f5b2"
                data-wf-element-id="00c1996e-02ff-2e6a-3818-33e1fb5b557c"
                aria-label="CONTACT_US"
              >
                <div className="uui-text-align-center-2">
                  <div className="uui-max-width-large-3 align-center">
                    <h2 className="uui-heading-medium no-padding--bottom">
                      Contact Us
                    </h2>
                    <div className="uui-text-size-large-3">
                      Fill out the form below or contact us directly at
                      support@alphamizer.io.
                    </div>
                  </div>
                </div>
                <div className="uui-form-field-wrapper">
                  <label htmlFor="NAME-3" className="uui-field-label">Name</label>
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength={256}
                    name="NAME"
                    data-name="NAME"
                    placeholder="Your name"
                    type="text"
                    id="NAME-3"
                    required
                  />
                </div>
                <div className="uui-form-field-wrapper">
                  <label htmlFor="CONTACT_US_PHONE" className="uui-field-label">Phone</label>
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength={256}
                    name="PHONE"
                    data-name="PHONE"
                    placeholder="Your phone number"
                    type="tel"
                    id="CONTACT_US_PHONE"
                    required
                  />
                </div>
                <div className="uui-form-field-wrapper">
                  <label htmlFor="EMAIL-6" className="uui-field-label">Business Email</label>
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength={256}
                    name="EMAIL"
                    data-name="EMAIL"
                    placeholder="you@company.com"
                    type="email"
                    id="EMAIL-6"
                    required
                  />
                </div>
                <div className="uui-form-field-wrapper">
                  <label htmlFor="COMPANY-4" className="uui-field-label">Company</label>
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength={256}
                    name="COMPANY"
                    data-name="COMPANY"
                    placeholder="Company Name"
                    type="text"
                    id="COMPANY-4"
                    required
                  />
                </div>
                <div id="w-node-_00c1996e-02ff-2e6a-3818-33e1fb5b5594-fb5b5575" className="uui-form-button-wrapper">
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    id="w-node-_00c1996e-02ff-2e6a-3818-33e1fb5b5595-fb5b5575"
                    className="uui-button-2 w-button"
                    value="Contact Us"
                  />
                </div>
              </form>
              <div
                className="success-message w-form-done"
                tabIndex={-1}
                role="region"
                aria-label="CONTACT_US success"
              >
                <div className="success-text">
                  Thank you. Your submission has been received.
                </div>
              </div>
              <div
                className="error-message w-form-fail"
                tabIndex={-1}
                role="region"
                aria-label="CONTACT_US failure"
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
