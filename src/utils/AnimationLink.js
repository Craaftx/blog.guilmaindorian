import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const transitionColor = '#42406f'
const transitionDirection = 'top'

const AnimationLink = ({ children, to, className }) => {
  return (
    <AniLink
      cover
      direction={transitionDirection}
      bg={transitionColor}
      to={to}
      className={className}
    >
      {children}
    </AniLink>
  )
}

export default AnimationLink
