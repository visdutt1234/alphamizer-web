'use client'

import Image from 'next/image'
import Link from 'next/link'

interface FooterProps {
  onContactUs: () => void
}

export default function Footer({ onContactUs }: FooterProps) {
  return (
    <section className="footer-light">
      <div className="container-2 contain-footer">
        <div className="footer-wrapper-two top">
          <div className="div-block-6">
            <div className="w-layout-hflex flex-block-7 wrap">
              <a href="#" className="footer-brand w-inline-block">
                <Image
                  src="/images/logo.jpeg"
                  width={150}
                  height={40}
                  alt="Alphamizer Logo"
                  className="image-17"
                />
              </a>
              <div className="div-block-23">
                <a
                  href="https://www.linkedin.com/company/alphamizeranalytics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link social-1 w-inline-block"
                >
                  <Image
                    src="/images/6438cefd3d4e697c8fcdf4f1_icons_linkedin.svg"
                    width={30}
                    height={30}
                    alt="LinkedIn"
                    className="image-4"
                  />
                </a>
                <a
                  href="https://twitter.com/alphamizeranalytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link w-inline-block"
                >
                  <Image
                    src="/images/6438cf0cabc1f585e20b9f94_icons_twitter.svg"
                    width={29}
                    height={29}
                    alt="Twitter"
                    className="image-7"
                  />
                </a>
              </div>
            </div>
            <div className="footer-social-block-two flex">
              <div className="div-block-24">
                <a
                  href="mailto:support@alphamizer.io?subject=Hello!"
                  className="link-block-5-copy w-inline-block"
                >
                  <div className="w-embed">
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7353 0.75H2.08824C1.21272 0.75 0.5 1.48431 0.5 2.38636V11.1136C0.5 12.0157 1.21272 12.75 2.08824 12.75H13.7353C14.6108 12.75 15.3235 12.0157 15.3235 11.1136V2.38636C15.3235 1.48431 14.6108 0.75 13.7353 0.75ZM13.3826 1.84091L8.23009 5.82264C8.0428 5.96718 7.78142 5.96718 7.59413 5.82264L2.44097 1.84091H13.3826ZM13.7353 11.6591H2.08824C1.79573 11.6591 1.55882 11.4143 1.55882 11.1136V2.52268L6.95882 6.69537C7.23874 6.91219 7.57558 7.0206 7.91176 7.0206C8.24794 7.0206 8.58479 6.91219 8.86471 6.69537L14.2647 2.52268V11.1136C14.2647 11.4143 14.0278 11.6591 13.7353 11.6591Z"
                        fill="#144f6d"
                      />
                    </svg>
                  </div>
                  <div className="text-block-26 content-b1 blue">
                    support@alphamizer.io
                  </div>
                </a>
                <a
                  href="mailto:careers@alphamizer.io?subject=Hello!"
                  className="link-block-5-copy w-inline-block"
                >
                  <div className="w-embed">
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7353 0.75H2.08824C1.21272 0.75 0.5 1.48431 0.5 2.38636V11.1136C0.5 12.0157 1.21272 12.75 2.08824 12.75H13.7353C14.6108 12.75 15.3235 12.0157 15.3235 11.1136V2.38636C15.3235 1.48431 14.6108 0.75 13.7353 0.75ZM13.3826 1.84091L8.23009 5.82264C8.0428 5.96718 7.78142 5.96718 7.59413 5.82264L2.44097 1.84091H13.3826ZM13.7353 11.6591H2.08824C1.79573 11.6591 1.55882 11.4143 1.55882 11.1136V2.52268L6.95882 6.69537C7.23874 6.91219 7.57558 7.0206 7.91176 7.0206C8.24794 7.0206 8.58479 6.91219 8.86471 6.69537L14.2647 2.52268V11.1136C14.2647 11.4143 14.0278 11.6591 13.7353 11.6591Z"
                        fill="#144f6d"
                      />
                    </svg>
                  </div>
                  <div className="text-block-26 content-b1 blue">
                    careers@alphamizer.io
                  </div>
                </a>
              </div>
              <div id="RECEIVE_UPDATES_MOBILE" className="footer-form mobile w-form">
                <form
                  id="wf-form-"
                  name="wf-form-"
                  data-name="RECEIVE_UPDATES_MOBILE"
                  method="post"
                  className="footer-form-container"
                  aria-label="RECEIVE_UPDATES_MOBILE"
                >
                  <div className="footer-form-block">
                    <input
                      className="footer-form-field w-input"
                      maxLength={256}
                      name="EMAIL"
                      data-name="EMAIL"
                      aria-label="Get product updates"
                      placeholder="Enter your email"
                      type="email"
                      id="RECEIVE_UPDATES_MOBILE_EMAIL"
                      required
                    />
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="footer-form-submit w-button"
                      value="Receive updates"
                    />
                  </div>
                </form>
                <div
                  className="success-message-3 w-form-done"
                  tabIndex={-1}
                  role="region"
                  aria-label="RECEIVE_UPDATES_MOBILE success"
                >
                  <div>Thank you! You will receive our newsletter.</div>
                </div>
                <div
                  className="w-form-fail"
                  tabIndex={-1}
                  role="region"
                  aria-label="RECEIVE_UPDATES_MOBILE failure"
                >
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex flex-block-6">
                <div className="text-block-26 content-b1 light small">
                  © 2024 Alphamizer Analytics Inc. All Rights Reserved.
                </div>
                <div className="w-layout-hflex flex-block-5">
                  <Link href="/terms-of-use" className="link-block-6 w-inline-block">
                    <div className="text-block-26 content-b1 light small">
                      Terms &amp; Conditions
                    </div>
                  </Link>
                  <Link href="/privacypolicy" className="link-block-6 w-inline-block">
                    <div className="text-block-26 content-b1 light small">
                      Privacy Policy
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-layout-hflex flex-block-8">
              <div className="footer-block-two mobile">
                <Link href="/#key-numbers" className="footer-link-two">Key Numbers</Link>
                <Link href="/#client-experiences" className="footer-link-two">Client Experiences</Link>
                <Link href="/#how-it-works" className="footer-link-two">How It Works</Link>
                <Link href="/#why-alphamizer" className="footer-link-two">Why Alphamizer</Link>
                <a
                  href="https://job-boards.greenhouse.io/alphamizeranalytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-two"
                >
                  Careers
                </a>
                <div className="footer-link-two" onClick={onContactUs}>
                  <p>Contact Us</p>
                </div>
              </div>
            </div>
            <div id="RECEIVE_UPDATES_FORM" className="footer-form w-form">
              <form
                id="wf-form-RECEIVE_UPDATES"
                name="wf-form-RECEIVE_UPDATES"
                data-name="RECEIVE_UPDATES"
                method="post"
                className="footer-form-container"
                aria-label="RECEIVE_UPDATES"
              >
                <div className="footer-form-block">
                  <input
                    className="footer-form-field w-input"
                    maxLength={256}
                    name="EMAIL"
                    data-name="EMAIL"
                    aria-label="Get product updates"
                    placeholder="Enter your email"
                    type="email"
                    id="RECEIVE_UPDATES_FORM_FIELD"
                    required
                  />
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="footer-form-submit w-button"
                    value="Receive updates"
                  />
                </div>
              </form>
              <div
                className="success-message-3 w-form-done"
                tabIndex={-1}
                role="region"
                aria-label="RECEIVE_UPDATES success"
              >
                <div>Thank you. You have been added to the mailing list.</div>
              </div>
              <div
                className="w-form-fail"
                tabIndex={-1}
                role="region"
                aria-label="RECEIVE_UPDATES failure"
              >
                <div>
                  Oops! Something went wrong while submitting the form.
                </div>
              </div>
            </div>
            <div className="w-layout-vflex flex-block-6 mobile">
              <div className="text-block-26 content-b1 light small">
                © 2025 Alphamizer Analytics Inc. All Rights Reserved.
              </div>
              <div className="w-layout-hflex flex-block-5">
                <Link href="/terms-of-use" className="link-block-6 w-inline-block">
                  <div className="text-block-26 content-b1 light small">
                    Terms &amp; Conditions
                  </div>
                </Link>
                <Link href="/privacypolicy" className="link-block-6 w-inline-block">
                  <div className="text-block-26 content-b1 light small">
                    Privacy Policy
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-block-two desktop">
            <Link href="/#key-numbers" className="footer-link-two">Key Numbers</Link>
            <Link href="/#why-alphamizer" className="footer-link-two">Why Alphamizer</Link>
            <Link href="/#how-it-works" className="footer-link-two">How It Works</Link>
          </div>
          <div className="footer-block-two s2-column desktop">
            <Link href="/#with-alphamizer" className="footer-link-two">With Alphamizer</Link>
            <Link href="/#client-experiences" className="footer-link-two">Client Experiences</Link>
            <a
              href="https://job-boards.greenhouse.io/alphamizeranalytics"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-two"
            >
              Careers
            </a>
          </div>
        </div>
        <div className="footer-wrapper-two last">
          <div className="w-layout-hflex flex-block-9">
            <div className="text-block-26 content-b1 light terms faded">
              © 2025 Alphamizer Analytics Inc. All Rights Reserved.
            </div>
          </div>
          <div className="div-block-7">
            <Link href="/terms-of-use" className="link-block dark w-inline-block">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacypolicy" className="link-block custom-bottom-privacy dark w-inline-block">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
