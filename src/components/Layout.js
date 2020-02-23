import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import Footer from './Footer'
import Moon from './Moon'
import '../scss/main.scss'

const TemplateWrapper = ({ children }) => (
  <>
    <Helmet title="Home | Gatsby + WordPress" />
    <Navbar />
    <div className="site-wrapper">
      <Moon starsAmout={100} />
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  </>
)

export default TemplateWrapper
