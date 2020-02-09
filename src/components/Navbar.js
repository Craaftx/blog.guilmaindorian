import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navigation">
        <div className="navigation-illustration">
          <div className="moon"></div>
          <div className="moon-full"></div>
          {[...Array(200)].map(() => (
            <span class="star"></span>
          ))}
        </div>
        <div className="navigation-content">
          <Link to="/" className="navigation-brand">
            <p>Guilmain Dorian</p>
            <span>Developer &amp; CSS Wizard</span>
          </Link>
          <div className="navigation-items">
            <ul>
              <li>
                <Link href="#about">Home</Link>
              </li>
              <li>
                <Link href="#projects">Categories</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )}
  />
)

export default Navbar
