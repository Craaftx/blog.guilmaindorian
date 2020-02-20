import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div(({ size }) => ({
  position: 'relative',
  fontSize: size ? `${size}` : '180px',
  height: '1em',
  width: '1em',
  boxSizing: 'border-box',
  borderRadius: '50%',
}))

const Body = styled.div`
  position: absolute;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #b3936a;
  &::before {
    content: '';
    position: absolute;
    top: -0.05em;
    left: -0.05em;
    width: 1.1em;
    height: 1.1em;
    border-radius: 50%;
    background-color: #b3936a;
    opacity: 0.4;
  }
`

const Asteroids = styled.ul`
  position: absolute;
  width: 1em;
  height: 1em;
  margin: 0;
  border-radius: 50%;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0.1em;
    left: 0.1em;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #d9b88d;
  }
  li {
    position: absolute;
    list-style: none;
    background: #b3936a;
    border: 0.027em solid #d9b88d;
    border-radius: 50%;
  }
  li:nth-child(1) {
    right: 0.333em;
    bottom: 0.467em;
    width: 0.133em;
    height: 0.133em;
  }
  li:nth-child(2) {
    right: -0.033em;
    top: 0.567em;
    width: 0.333em;
    height: 0.333em;
  }
  li:nth-child(3) {
    left: 0.367em;
    top: 0.017em;
    width: 0.15em;
    height: 0.15em;
  }
  li:nth-child(4) {
    left: -0.04em;
    top: 0.167em;
    width: 0.267em;
    height: 0.267em;
  }
  li:nth-child(5) {
    right: 0.467em;
    bottom: 0.133em;
    width: 0.233em;
    height: 0.233em;
  }
`

const PlanetAsteroid = ({ size }) => (
  <Wrapper size={size}>
    <Body />
    <Asteroids>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </Asteroids>
  </Wrapper>
)

export default PlanetAsteroid
