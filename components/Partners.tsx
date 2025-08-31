'use client'

import Image from 'next/image'

export default function Partners() {
  const partnerLogos = [
    { src: '/images/6644cda3b6da1d9786cfe0cb_s_26p.jpg', alt: 'D1 Capital Partners' },
    { src: '/images/66330ceebcfcb0aa454a0b20_logo_01.jpg', alt: 'Duquesne' },
    { src: '/images/66330cee2d4a493de2c34ead_logo_02.jpg', alt: 'Tiger Global' },
    { src: '/images/6847b8e46edeb6dce0f4d035_msci_2.png', alt: 'MSCI' },
    { src: '/images/6847b9a75f59e8876749bba6_wolfe_2.png', alt: 'Wolfe' },
    { src: '/images/6847b8e4eff501f9f2158c04_axioma_2.png', alt: 'Axioma' },
    { src: '/images/6847bb4f92b57e2bc4ab23d2_enfusion_2.png', alt: 'Enfusion' },
    { src: '/images/66330cedb2bf1dc44b78aa21_logo_07.jpg', alt: 'Refinitiv' },
    { src: '/images/66330cedef2f1977d5f0901d_logo_08.jpg', alt: 'LSEG Data Analytics' },
    { src: '/images/66330ced2d4a493de2c34e75_logo_06.jpg', alt: 'S&P Global' },
  ]

  return (
    <section className="content-section padded">
      <div className="w-layout-blockcontainer content-section--container partners-section w-container">
        <h3 id="w-node-d4baafa1-372d-71cc-be40-c621ba0a8e20-de17f5b2" className="headline-h3 partners-headline">
          Some of our partners
        </h3>
        
        <div id="w-node-e704afad-38aa-f01c-f5ba-b822b76b8544-de17f5b2" className="w-layout-hflex partners-slider">
          <div className="div-block-32">
            <div className="partners-content--container">
              {partnerLogos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  width={150}
                  height={80}
                  alt={logo.alt}
                  className="marquee-image"
                />
              ))}
            </div>
          </div>
          
          <div className="marquee">
            <div className="marquee-content scroll">
              {partnerLogos.map((logo, index) => (
                <Image
                  key={`scroll-1-${index}`}
                  src={logo.src}
                  width={150}
                  height={80}
                  alt={logo.alt}
                  className="marquee-image"
                />
              ))}
            </div>
            <div className="marquee-content scroll">
              {partnerLogos.map((logo, index) => (
                <Image
                  key={`scroll-2-${index}`}
                  src={logo.src}
                  width={150}
                  height={80}
                  alt={logo.alt}
                  className={`marquee-image ${index === 0 ? 'margin-content-2' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
