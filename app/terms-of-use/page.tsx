'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import RequestDemoModal from '../../components/RequestDemoModal'
import ContactUsModal from '../../components/ContactUsModal' 
import { useState } from 'react'

export default function TermsOfUse() {
  const [isRequestDemoOpen, setIsRequestDemoOpen] = useState(false)
  const [isContactUsOpen, setIsContactUsOpen] = useState(false)

  const openRequestDemo = () => setIsRequestDemoOpen(true)
  const closeRequestDemo = () => setIsRequestDemoOpen(false)
  const openContactUs = () => setIsContactUsOpen(true)
  const closeContactUs = () => setIsContactUsOpen(false)

  return (
    <main>
      <Navigation 
        onRequestDemo={openRequestDemo}
        onContactUs={openContactUs}
      />
      
      <section className="hero-heading-right-copy">
        <h1 className="heading-4">Terms of Use</h1>
        <p className="paragraph-9">
          This &ldquo;Terms of Use&rdquo; (or &ldquo;<strong>Terms of Use</strong>&rdquo;) applies to www.alphamizer.com (&ldquo;Site&rdquo;), which is owned and operated by Editobn AI, Inc. (&ldquo;Company&rdquo; or &ldquo;we&rdquo; or &ldquo;us&rdquo;), app.alphamizer.com, and the various websites, services, and applications which are accessed thereby (collectively with the Site, the &ldquo;Service&rdquo;). This Terms of Use explains how we collect, use and disclose personally identifying information (&ldquo;Personal Information&rdquo;) gathered through the Service. This Terms of Use is subject to and incorporates by reference the Privacy Policy (located at: alphamizer.com/privacypolicy).
        </p>
        <p className="paragraph-10">
          We reserve the right to change this Privacy Policy from time to time without notice to you. You should check here periodically to review the current Privacy Policy, which is effective as of the revision date listed below. Your use of the Service and submission of Personal Information to us constitutes acceptance and understanding of this Privacy Policy.
        </p>
        
        <div className="privacy-policy-paragraph">
          <p className="paragraph-11"><em>Types of Personal Information Collected Through the Service</em></p>
          <p>We may collect the following types of Personal Information through the Service:</p>
          <ul role="list">
            <li>Your contact information (such as name, address, email address and phone number);</li>
            <li>Personal information contained in legal agreements (such as invoices and orders);</li>
            <li>Information posted by you to the Service (such as comments, suggestions, feedback, opinions, or media); and</li>
            <li>Any other Personal Information you submit through the Service or to us in the form of an email.</li>
          </ul>
        </div>
        
        <div className="privacy-policy-paragraph">
          <p className="paragraph-11"><em>Types of Uses of Information & Personal Information</em></p>
          <p>We collect, store and use the information as well as Personal Information you provide to us in various ways as follows:</p>
          <ul role="list">
            <li>To process product orders received through the Service or other ways you communicate them to us (e.g., email, phone);</li>
            <li>To evaluate business opportunities;</li>
            <li>To effectuate or enforce a transaction or agreement;</li>
            <li>To adjust offerings or services provided by us to you;</li>
            <li>To provide you with information about our products and services that we believe you may find of interest, including to send you mailing lists, and marketing and promotional e-mails;</li>
            <li>To authenticate users of the Service; </li>
            <li>To respond to requests or inquiries, and for similar, customer service-related purposes;</li>
            <li>We automatically collect through the Service information that is often not personally identifying, such as the website from which visitors came to the Service, Service visitors&apos; IP address, browser type and other information relating to the device through which they access the Service. We may combine this information with the Personal Information we have collected from you; and</li>
            <li>To improve the Service and offerings or services provided by us and to better understand how users access and use the Service and offerings provided by us.<br/><br/>For clarity, we do not make any warranty, express, implied or otherwise, that we will be able to prevent loss, misuse, unauthorized access to, or alteration of personally identifiable information you provide to us. You make any disclosure of personally identifiable information to us at your own risk.</li>
          </ul>
        </div>
        
        <div className="privacy-policy-paragraph">
          <p className="paragraph-11"><em>Types of Sharing of or Disclosures of Personal Information</em></p>
          <p>We may share or disclose Personal Information to third parties for the following purposes:</p>
          <ul role="list">
            <li>In aggregated, or non-personally identifying, forms of information about users of our Service for marketing, advertising, research or other reasonable business purposes;</li>
            <li>To provide you with information relating to products or services that we believe you may find of interest;</li>
            <li>In response to a subpoena or other legal process by a governmental entity or third party, or if otherwise required by law;</li>
            <li>To protect or enforce our rights including with respect to our assets and properties; </li>
            <li>In the event of the sale or dissolution (bankruptcy) of assets, in whole or in part, of our business or any of its affiliates;</li>
            <li>The fulfillment of orders, or the providision, or performance of functions on our behalf (e.g., such as third-party service providers, contractors, payment processors, banks, and collection agencies); and</li>
            <li>To provide products or services you have requested.</li>
          </ul>
        </div>
        
        <div className="privacy-policy-paragraph">
          <p className="paragraph-11"><em>Cookies, Beacons and Analytics</em></p>
          <p>When you interact with the Service, we strive to make your experience easy and meaningful. The Service may use technology, or those of third-party service providers, such as cookies, web beacons (clear GIFs, web bugs) and similar technologies to track user activity and collect site data. We may combine this data with the Personal Information we have collected from you.</p>
        </div>
        
        <div className="privacy-policy-paragraph">
          <p className="paragraph-11"><em>Cookies</em></p>
          <p>We (including our chosen third-party service providers) may use cookies to track visitor or user activity on the Service. A cookie is a text file that a website transfers to your computer&apos;s hard drive for record-keeping purposes. Our cookies assign a random, unique number to each visitor&apos;s computer. They do not contain information that would personally identify the visitor, although we can associate a cookie with any identifying information that is or has been provided to us while visiting the Service. We may use cookies that remain on your computer for a specified period of time or until they are deleted (persistent cookies). We may also use cookies that exist only temporarily during an online session (session cookies) – these cookies allow us to identify you temporarily as you move through the Service. Most browsers allow users to refuse cookies but doing so may impede the functionality of some portions of our Service.</p>
        </div>
        
        <div className="privacy-policy-paragraph">
          <p className="paragraph-11"><em>Web Beacons</em></p>
          <p>Web beacons are tiny graphics with a unique identifier, similar in function to cookies, that are used to track the online movements of Web users. In contrast to cookies, which are stored on your computer&apos;s hard drive, Web beacons are embedded invisibly on webpages and may not be disabled or controlled through your browser.</p>
        </div>
        
        <div className="privacy-policy-paragraph">
          <p className="paragraph-11"><em>Third Parties</em></p>
          <p>As noted, we may also engage third parties to track and analyze Service activity on our behalf. To do so, these third parties may place cookies or web beacons to track user activity on our Service. We use the data collected by such third parties to administer and improve the quality of the Service, analyze usage of the Service, and provide a more enhanced user experience on the Service, such as personalizing and delivering relevant offers and content based on user activity on the Service. We do not provide these third parties with your Personal Information.</p>
        </div>
        
        <div className="privacy-policy-paragraph">
          <p className="paragraph-11"><em>User Content</em></p>
          <p>The Service may allow users to post information. Certain of such information may be viewable by other users, as well as visitors to the Service. In addition, your name, as well as other optional information you choose to submit along with the information you post, may be publicly displayed along with your comment or blog. We are not responsible for the privacy of any information that you choose to post to the Service, or for the accuracy of any information contained in those postings. We cannot prevent such information from being used by others in a manner that may violate this Privacy Policy, the law, or your personal privacy. Your posting of any content to any of the Service is subject to our Terms of Use.</p>
        </div>
        
        <div className="privacy-policy-paragraph">
          <p className="paragraph-11"><em>Third-Party Links</em></p>
          <p>The Service contains links to other, third-party websites. Any access to and use of such linked websites is not governed by this Privacy Policy, but, instead, is governed by the privacy policies of those third-party websites. We are not responsible for the information practices of such third-party websites.</p>
        </div>
        
        <div className="privacy-policy-paragraph">
          <p className="paragraph-11"><em>Email Policy</em></p>
          <p>We may use your email address to communicate with you about orders you have placed, inquiries you have made about our products and services, or information you have shared with us through the Service or email. We may send you emails from time-to-time, about information that we believe may be of interest to you. We may also send you news and offers about our products and services, or those of our chosen partners. Examples include, but are not limited to, newsletters, research notes, market summaries, information about special offers, or other products or offerings.<br/><br/>If, at any time, you would like to stop receiving these promotional e-mails, you may follow the opt-out instructions contained in any such e-mail. Please note that it may take a few business days for us to process opt-out requests. If you opt-out of receiving emails or promotions, we still may send you e-mails to you in accordance with this Privacy Policy, as requested by you, or in reference to other customer service purposes</p>
        </div>
        
        <div className="privacy-policy-paragraph">
          <p className="paragraph-11"><em>International Users</em></p>
          <p>The Service is hosted in the United States. If you are accessing the Service from outside the United States, by providing your information to the Service, you are consenting to and authorizing the transfer of your information to the United States for storage, use, processing, maintenance and onward transfer of such information to other entities, regardless of their location, in accordance with this Privacy Policy and the Service&apos;s Terms of Use. For clarity, and as outlined in the Terms of Use, you are also consenting to the application of United States law in all matters concerning the Service.</p>
        </div>
        
        <div className="privacy-policy-paragraph">
          <p className="paragraph-11"><em>How to Contact Us</em></p>
          <p>While we strive for error free performance, we cannot always catch an unintended privacy issue. As a result, we encourage your questions and comments about any privacy concerns. Please direct them to us by an email to the following: help@alphamizer.io.</p>
        </div>
      </section>
      
      <Footer 
        onContactUs={openContactUs}
      />

      <RequestDemoModal 
        isOpen={isRequestDemoOpen}
        onClose={closeRequestDemo}
      />

      <ContactUsModal 
        isOpen={isContactUsOpen}
        onClose={closeContactUs}
      />
    </main>
  )
}
