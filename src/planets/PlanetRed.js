import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div(({ size }) => ({
  position: 'absolute',
  fontSize: size ? `${size}` : '240px',
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
  background-color: #ec534b;
  &::before {
    content: '';
    position: absolute;
    top: -0.05em;
    left: -0.05em;
    width: 1.1em;
    height: 1.1em;
    border-radius: 50%;
    background-color: #ec534b;
    opacity: 0.3;
  }
`

const Asteroids = styled.ul`
  position: absolute;
  margin: 0;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  overflow: hidden;
  li {
    position: absolute;
    list-style: none;
    background: #DF463E;
    border-radius: 50%;
  }
  li:nth-child(1) {
    right: 0.125em;
    bottom: 0.167em;
    width: 0.167em;
    height: 0.167em;
  }
  li:nth-child(2) {
    right: 0.063em;
    top: 0.354em;
    width: 0.208em;
    height: 0.208em;
  }
  li:nth-child(3) {
    left: 0.333em;
    top: 0.083em;
    width: 0.208em;
    height: 0.208em;
  }
  li:nth-child(4) {
    left: -0.042em;
    top: 0.083em;
    width: 0.208em;
    height: 0.208em;
  }
  li:nth-child(5) {
    right: 0.292em;
    bottom: 0.083em;
    width: 0.063em;
    height: 0.063em;
  }
  li:nth-child(6) {
    left: 0.167em;
    bottom: 0.417em;
    width: 0.104em;
    height: 0.104em;
  }
  li:nth-child(7) {
    right: 0.5em;
    bottom: 0.417em;
    width: 0.063em;
    height: 0.063em;
  }
  li:nth-child(8) {
    left: 0.292em;
    bottom: 0.083em;
    width: 0.125em;
    height: 0.125em;
  }
`

const PlanetRed = ({ size }) => (
  <Wrapper size={size}>
    <Body />
    <Asteroids>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </Asteroids>
  </Wrapper>
)

export default PlanetRed
