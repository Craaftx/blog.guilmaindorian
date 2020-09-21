import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div(({ size }) => ({
  position: 'absolute',
  fontSize: size ? `${size}` : '180px',
  height: '1em',
  width: '1em',
  boxSizing: 'border-box',
  borderRadius: '50%',
  transform: 'scale(0.3) rotate(172deg)',
  top: '-101px',
  left: '110px',
  zIndex: '-1',
}))

const Body = styled.div`
  position: absolute;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #f7af5a;
  &::before {
    content: '';
    position: absolute;
    top: -0.1em;
    right: 0.2em;
    width: 0.3em;
    height: 0.3em;
    border-radius: 50%;
    background: #111136;
  }
  &::after {
    content: '';
    position: absolute;
    top: -0.05em;
    right: -0.1em;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background: #111136;
  }
`

const Chunks = styled.ul`
  position: absolute;
  width: 1em;
  height: 1em;
  margin: 0;
  border-radius: 50%;
  &::before {
    content: '';
    position: absolute;
    top: 0.2em;
    right: -0.2em;
    width: 0.4em;
    height: 0.4em;
    border-radius: 50%;
    background: #111136;
  }
  li {
    position: absolute;
    list-style: none;
    background: #6e3b20;
    border-radius: 50%;
  }
  li:nth-child(1) {
    right: 0.5em;
    bottom: 0.15em;
    width: 0.08em;
    height: 0.08em;
  }
  li:nth-child(2) {
    right: 0.15em;
    top: 0.6em;
    width: 0.16em;
    height: 0.16em;
  }
  li:nth-child(3) {
    left: 0.1em;
    top: 0.1em;
    width: 0.15em;
    height: 0.15em;
  }
  li:nth-child(4) {
    left: 0.1em;
    bottom: 0.35em;
    width: 0.1em;
    height: 0.1em;
  }
  li:nth-child(5) {
    right: 0.4em;
    bottom: 0.45em;
    width: 0.233em;
    height: 0.233em;
  }
  li:nth-child(6) {
    right: 0.05em;
    bottom: 0.65em;
    width: 0.1em;
    height: 0.1em;
    background: #f7af5a;
  }
  li:nth-child(7) {
    right: 0.2em;
    top: 0em;
    width: 0.15em;
    height: 0.15em;
    background: #f7af5a;
  }
`

const Cookie = ({ size }) => (
  <Wrapper size={size}>
    <Body />
    <Chunks>
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
    </Chunks>
  </Wrapper>
)

export default Cookie
