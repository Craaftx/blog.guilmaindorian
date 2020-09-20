import React, { useState } from 'react'
import AnimationLink from '../utils/AnimationLink'
import PlanetBlue from '../planets/PlanetBlue'
import PlanetAsteroid from '../planets/PlanetAsteroid'
import PlanetRed from '../planets/PlanetRed'
import PlanetPurple from '../planets/PlanetPurple'

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <nav className="navigation">
      <div
        className="navigation__mobile-burger"
        onClick={e => {
          setMenuIsOpen(menuIsOpen ? false : true)
        }}
      />
      <div
        className={`navigation-content ${
          menuIsOpen
            ? 'navigation-content--opened'
            : 'navigation-content--closed'
        }`}
      >
        <div
          className="navigation-content__mobile-background"
          onClick={e => {
            setMenuIsOpen(menuIsOpen ? false : true)
          }}
        />
        <div className="navigation-brand">
          <AnimationLink to="/" className="navigation-item">
            <div className="navigation-item__short">
              <div className="ring" />
            </div>
            <div className="navigation-item__link">
              <div>Dorian G</div>
              <small>CSS Blog ?</small>
            </div>
          </AnimationLink>
        </div>
        <div className="navigation-items">
          {/* <AnimationLink
            to="/categories/tutoriels/"
            className="navigation-item"
          >
            <div className="navigation-item__planet">
              <PlanetBlue size="60px" />
            </div>
            <span className="navigation-item__link">Tutoriels</span>
          </AnimationLink> */}
          <AnimationLink to="/categories/series/" className="navigation-item">
            <div className="navigation-item__planet">
              <PlanetPurple size="60px" />
            </div>
            <span className="navigation-item__link">Séries</span>
          </AnimationLink>
          {/* <AnimationLink
            to="/categories/ressources/"
            className="navigation-item"
          >
            <div className="navigation-item__planet">
              <PlanetAsteroid size="60px" />
            </div>
            <span className="navigation-item__link">Ressources</span>
          </AnimationLink>
          <AnimationLink
            to="/categories/experiences/"
            className="navigation-item"
          >
            <div className="navigation-item__planet">
              <PlanetRed size="60px" />
            </div>
            <span className="navigation-item__link">Expériences</span>
          </AnimationLink> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
