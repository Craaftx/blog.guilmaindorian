import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div(({ size }) => ({
  position: 'absolute',
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
  background-color: #d72370;
  &::before {
    content: '';
    position: absolute;
    top: -0.05em;
    left: -0.05em;
    width: 1.1em;
    height: 1.1em;
    border-radius: 50%;
    background-color: #d72370;
    opacity: 0.2;
  }
`

const Lines = styled.ul`
  position: absolute;
  margin: 0;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  transform: rotate(-45deg);
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0.45em;
    height: 1em;
    background-color: #e4478a;
  }
  li {
    position: absolute;
    margin: 0;
    padding: 0;
  }
  li:nth-child(1) {
    top: 0em;
    left: 0em;
    background-color: #d72370;
    height: 0.1em;
    width: 0.65em;
    border-radius: 0.1em;
  }
  li:nth-child(2) {
    top: 0.1em;
    right: 0em;
    background-color: #e4478a;
    height: 0.15em;
    width: 0.55em;
    border-radius: 0.15em;
  }
  li:nth-child(3) {
    top: 0.25em;
    left: 0em;
    background-color: #d72370;
    height: 0.1em;
    width: 0.65em;
    border-radius: 0.1em;
  }
  li:nth-child(4) {
    top: 0.35em;
    right: 0em;
    background-color: #e4478a;
    height: 0.1em;
    width: 0.50em;
    border-radius: 0.15em;
  }
  li:nth-child(5) {
    top: 0.45em;
    left: 0em;
    background-color: #d72370;
    height: 0.15em;
    width: 0.70em;
    border-radius: 0.1em;
  }
  li:nth-child(6) {
    top: 0.60em;
    right: 0em;
    background-color: #e4478a;
    height: 0.1em;
    width: 0.60em;
    border-radius: 0.15em;
  }
  li:nth-child(7) {
    top: 0.70em;
    left: 0em;
    background-color: #d72370;
    height: 0.1em;
    width: 0.60em;
    border-radius: 0.1em;
  }
  li:nth-child(8) {
    top: 0.80em;
    right: 0em;
    background-color: #e4478a;
    height: 0.1em;
    width: 0.55em;
    border-radius: 0.1em;
  }
  li:nth-child(9) {
    top: 0.90em;
    left: 0em;
    background-color: #d72370;
    height: 0.1em;
    width: 0.70em;
    border-radius: 0.1em;
  }
`

const PlanetPurple = ({ size }) => (
  <Wrapper size={size}>
    <Body />
    <Lines>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </Lines>
  </Wrapper>
)

export default PlanetPurple
