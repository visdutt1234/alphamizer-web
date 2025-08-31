'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useClientMount } from '../hooks/useClientMount'

interface NavigationProps {
  onRequestDemo: () => void
  onContactUs: () => void
}

export default function Navigation({ onRequestDemo, onContactUs }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMounted = useClientMount()

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <div className="w-layout-vflex navigation">
      <section className="content-section">
        <div className="w-layout-blockcontainer content-section--container navbar w-container">
          <div id="w-node-_5a9b7bd7-b0e9-48f8-40dc-e33e5ea91e32-5ea91e2f" className="w-layout-grid navbar--content--grid">
            <div id="w-node-_5a9b7bd7-b0e9-48f8-40dc-e33e5ea91e33-5ea91e2f" className="w-layout-vflex navbar--content--grid--item leading">
              <a href="/" aria-current="page" className="w-inline-block w--current">
                <Image
                  src="/images/logo.jpeg"
                  width={200}
                  height={50}
                  alt="Alphamizer Logo"
                  priority
                />
              </a>
            </div>
            
            <div id="w-node-_5a9b7bd7-b0e9-48f8-40dc-e33e5ea91e36-5ea91e2f" className="w-layout-vflex navbar--content--grid--item content">
              <ul role="list" className="navbar--menu w-list-unstyled">
                <li className="navbar--menu--item">
                  <a href="/#client-experiences" className="navbar--menu--item--link w-inline-block">
                    <div>Client Experiences</div>
                  </a>
                  <a href="/#how-it-works" className="navbar--menu--item--link w-inline-block">
                    <div>How It Works</div>
                  </a>
                  <a 
                    href="https://job-boards.greenhouse.io/alphamizeranalytics" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="navbar--menu--item--link w-inline-block"
                  >
                    <div>Careers</div>
                  </a>
                  <div className="navbar--menu--item--link" onClick={onContactUs}>
                    <div>Contact Us</div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div id="w-node-_5a9b7bd7-b0e9-48f8-40dc-e33e5ea91e3f-5ea91e2f" className="w-layout-vflex navbar--content--grid--item trailing content">
              <ul role="list" className="navbar--menu w-list-unstyled">
                <li className="navbar--menu--item trailing">
                  <a 
                    href="https://app.alphamizer.io/login" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="navbar--menu--item--link w-inline-block"
                  >
                    <div>Login</div>
                  </a>
                  <div className="modal-trigger">
                    <a href="#" className="button--primary w-button" onClick={onRequestDemo}>
                      Request Demo
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div id="w-node-_5a9b7bd7-b0e9-48f8-40dc-e33e5ea91e45-5ea91e2f" className="navbar--trigger-closed gap-small">
              <div className="modal-trigger">
                <a href="#" className="button--primary small w-button" onClick={onRequestDemo}>
                  Request Demo
                </a>
              </div>
              <div id="nav-icon" className={`w-embed ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                <div style={{ backgroundColor: '#000' }}></div>
                <div  style={{ backgroundColor: '#000' }}></div>
                <div  style={{ backgroundColor: '#000' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile Menu */}
      {isMounted && (
        <section 
          id="menu-mobile" 
          className="content-section menu-mobile"
          style={{ display: isMobileMenuOpen ? 'block' : 'none' }}
          suppressHydrationWarning
        >
          <div className="w-layout-blockcontainer content-section--container navbar opened w-container">
            <div id="w-node-_5a9b7bd7-b0e9-48f8-40dc-e33e5ea91e4c-5ea91e2f" className="w-layout-grid navbar--content--grid">
              <div id="w-node-_5a9b7bd7-b0e9-48f8-40dc-e33e5ea91e4d-5ea91e2f" className="w-layout-vflex navbar--content--grid--item leading">
                <a href="/" aria-current="page" className="w-inline-block w--current">
                  <Image
                    src="/images/logo.jpeg"
                    width={200}
                    height={50}
                    alt="Alphamizer Logo"
                    className="image-22"
                  />
                </a>
              </div>
              
              <div id="w-node-_5a9b7bd7-b0e9-48f8-40dc-e33e5ea91e50-5ea91e2f" className="w-layout-vflex navbar--content--grid--item content">
                <ul role="list" className="navbar--menu w-list-unstyled">
                  <li className="navbar--menu--item">
                    <a href="#why-alphamizer" className="navbar--menu--item--link w-inline-block">
                      <div>Why Alphamizer</div>
                    </a>
                    <a href="#how-it-works" className="navbar--menu--item--link w-inline-block">
                      <div>How It Works</div>
                    </a>
                    <a href="#client-experiences" className="navbar--menu--item--link w-inline-block">
                      <div>Client Experiences</div>
                    </a>
                    <div className="navbar--menu--item--link" onClick={onContactUs}>
                      <div>Contact Us</div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div id="w-node-_5a9b7bd7-b0e9-48f8-40dc-e33e5ea91e59-5ea91e2f" className="w-layout-vflex navbar--content--grid--item trailing content">
                <ul role="list" className="navbar--menu w-list-unstyled">
                  <li className="navbar--menu--item trailing">
                    <a 
                      href="https://app.alphamizer.io/login" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="navbar--menu--item--link w-inline-block"
                    >
                      <div>Login</div>
                    </a>
                    <div className="modal-trigger">
                      <a href="#" className="button--primary w-button" onClick={onRequestDemo}>
                        Request Demo
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div id="w-node-_5a9b7bd7-b0e9-48f8-40dc-e33e5ea91e5f-5ea91e2f" className="navbar--trigger-closed gap-small">
                <div className="modal-trigger">
                  <a href="#" className="button--primary small w-button" onClick={onRequestDemo}>
                    Request Demo
                  </a>
                </div>
                <div className="w-embed" onClick={toggleMobileMenu}>
                  <svg
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    width="38"
                    height="20"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L17.5 18"
                      stroke="#444444"
                      strokeWidth="2"
                    />
                    <path
                      d="M17.5 1.5L1 18"
                      stroke="#444444"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <ul role="list" className="navbar--menu mobile w-list-unstyled">
            <li className="navbar--menu--item mobile">
              <a href="/#client-experiences" className="navbar--menu--item--link w-inline-block">
                <div>Client Experiences</div>
              </a>
              <a href="/#how-it-works" className="navbar--menu--item--link w-inline-block">
                <div>How It Works</div>
              </a>
              <a href="/#why-alphamizer" className="navbar--menu--item--link w-inline-block">
                <div>Why Alphamizer</div>
              </a>
              <a 
                href="https://job-boards.greenhouse.io/alphamizeranalytics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="navbar--menu--item--link w-inline-block"
              >
                <div>Careers</div>
              </a>
              <div className="navbar--menu--item--link" onClick={onContactUs}>
                <div>Contact Us</div>
              </div>
              <a 
                href="https://app.alphamizer.io/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="navbar--menu--item--link w-inline-block"
              >
                <div>Login</div>
              </a>
            </li>
          </ul>
        </section>
      )}
    </div>
  )
}
