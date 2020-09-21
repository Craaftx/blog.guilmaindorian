import React from 'react'
import styled from '@emotion/styled'
import PlanetBlue from '../planets/PlanetBlue'
import PlanetRed from '../planets/PlanetRed'
import PlanetAsteroid from '../planets/PlanetAsteroid'
import PlanetPurple from '../planets/PlanetPurple'

const Container = styled.div(({ top, left, size }) => ({
  position: 'absolute',
  width: size || '5vw',
  height: size || '5vw',
  top,
  left,
}))

const PlanetDisplayer = ({ category, size, isOnSinglePage = false }) => {
  switch (category) {
    case 'tutoriels':
      return isOnSinglePage ? (
        <Container top="4vh" left="18vw" size="13vw">
          <PlanetBlue size="13vw" />
        </Container>
      ) : (
        <PlanetBlue size={size} />
      )
    case 'series':
      return isOnSinglePage ? (
        <Container top="4vh" left="20vw" size="15vw">
          <PlanetPurple size="15vw" />
        </Container>
      ) : (
        <PlanetPurple size={size} />
      )
    case 'ressources':
      return isOnSinglePage ? (
        <Container top="1vh" left="10vw" size="15vw">
          <PlanetAsteroid size={size} />
        </Container>
      ) : (
        <PlanetAsteroid size={size} />
      )
    case 'experiences':
      return isOnSinglePage ? (
        <Container top="3vh" left="55vw" size="18vw">
          <PlanetRed size="18vw" />
        </Container>
      ) : (
        <PlanetRed size={size} />
      )
    default:
      return <></>
  }
}

export default PlanetDisplayer
