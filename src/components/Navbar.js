import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PlanetBlue from '../planets/PlanetBlue'
import PlanetAsteroid from '../planets/PlanetAsteroid'
import PlanetRed from '../planets/PlanetRed'
import PlanetPurple from '../planets/PlanetPurple'

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
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
          <div
            class="navigation__mobile-burger"
            onClick={e => {
              setMenuIsOpen(menuIsOpen ? false : true)
            }}
          ></div>
          <div
            className={`navigation-content ${
              menuIsOpen
                ? 'navigation-content--opened'
                : 'navigation-content--closed'
            }`}
          >
            <div
              class="navigation-content__mobile-background"
              onClick={e => {
                setMenuIsOpen(menuIsOpen ? false : true)
              }}
            ></div>
            <div className="navigation-brand">
              <AniLink
                cover
                direction="top"
                bg="#42406f"
                to="/"
                className="navigation-item"
              >
                <div className="navigation-item__short">
                  <div className="ring"></div>
                </div>
                <div className="navigation-item__link">
                  <div>Dorian G</div>
                  <small>CSS Blog ?</small>
                </div>
              </AniLink>
            </div>
            <div className="navigation-items">
              <AniLink
                cover
                direction="top"
                bg="#42406f"
                to="/"
                className="navigation-item"
              >
                <div className="navigation-item__planet">
                  <PlanetBlue size="60px" />
                </div>
                <span className="navigation-item__link">Tutoriels</span>
              </AniLink>
              <AniLink
                cover
                direction="top"
                bg="#42406f"
                to="/"
                className="navigation-item"
              >
                <div className="navigation-item__planet">
                  <PlanetPurple size="60px" />
                </div>
                <span className="navigation-item__link">Séries</span>
              </AniLink>
              <AniLink
                cover
                direction="top"
                bg="#42406f"
                to="/"
                className="navigation-item"
              >
                <div className="navigation-item__planet">
                  <PlanetAsteroid size="60px" />
                </div>
                <span className="navigation-item__link">Ressources</span>
              </AniLink>
              <AniLink
                cover
                direction="top"
                bg="#42406f"
                to="/"
                className="navigation-item"
              >
                <div className="navigation-item__planet">
                  <PlanetRed size="60px" />
                </div>
                <span className="navigation-item__link">Expériences</span>
              </AniLink>
            </div>
          </div>
        </nav>
      )}
    />
  )
}

export default Navbar
