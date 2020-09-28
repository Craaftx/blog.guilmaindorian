import React from 'react'
import Helmet from 'react-helmet'
import CookieConsent from 'react-cookie-consent'
import Cookie from './Cookie'
import AnimationLink from '../utils/AnimationLink'

import Navbar from './Navbar'
import Footer from './Footer'
import Moon from './Moon'
import '../scss/main.scss'
import useSiteMetadata from '../utils/useSiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </Helmet>
      <Navbar />
      <div className="site-wrapper">
        <Moon starsAmout={100} />
        <main className="site-content">{children}</main>
        <Footer />
      </div>
      <CookieConsent
        disableStyles
        buttonClasses="cookies-bar__button"
        containerClasses="cookies-bar"
        contentClasses="cookies-bar__content"
        buttonText="Compris"
        location="bottom"
      >
        <Cookie />
        Hey ! Je dois te préciser que le blog utilise des cookies. En explorant
        le site, tu acceptes leur utilisation selon les conditions de la
        <AnimationLink to="/politique-de-confidentialite">
          &nbsp; politique de confidentialité
        </AnimationLink>
        .
      </CookieConsent>
    </>
  )
}

export default TemplateWrapper
