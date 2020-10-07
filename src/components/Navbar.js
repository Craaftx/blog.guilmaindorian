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
              <small>
                CSS &nbsp;
                <span role="img" aria-label="Magicien">
                  🧙‍
                </span>
              </small>
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
          </AnimationLink> */}
          <AnimationLink
            to="/categories/experiences/"
            className="navigation-item"
          >
            <div className="navigation-item__planet">
              <PlanetRed size="60px" />
            </div>
            <span className="navigation-item__link">Expériences</span>
          </AnimationLink>
        </div>
        <div className="navigation-social">
          <a
            href="https://www.linkedin.com/in/dorian-guilmain/"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
          </a>
          <a href="https://codepen.io/Craaftx" rel="noreferrer" target="_blank">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
