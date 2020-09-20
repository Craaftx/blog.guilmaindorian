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
  background-color: #4979b7;
  &::before {
    content: '';
    position: absolute;
    top: -0.05em;
    left: -0.05em;
    width: 1.1em;
    height: 1.1em;
    border-radius: 50%;
    background-color: #4979b7;
    opacity: 0.4;
  }
`

const Lines = styled.ul`
  position: absolute;
  margin: 0;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  transform: rotate(15deg);
  overflow: hidden;
  li {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2em;
    height: 0.111em;
    list-style: none;
    border-top: 0.028em solid #4979b7;
    border-bottom: 0.028em solid #4979b7;
  }
  li:nth-child(1) {
    height: 0.111em;
    border-top: 0.111em solid #4471ac;
    border-bottom: 0.028em solid #4979b7;
  }
  li:nth-child(2) {
    height: 0.333em;
    border-top: 0.056em solid #4675b1;
    border-bottom: 0.083em solid #527fba;
  }
  li:nth-child(3) {
    height: 0.5em;
    border-top: 0.056em solid #4e7db9;
    border-bottom: 0.028em solid #4472ae;
  }
  li:nth-child(4) {
    height: 0.667em;
    border-top: 0.056em solid #426fa8;
    border-bottom: 0.028em solid #5381bb;
  }
  li:nth-child(5) {
    height: 0.889em;
    border-top: 0.028em solid #4e7db9;
    border-bottom: 0.056em solid #4472ae;
  }
`

const PlanetBlue = ({ size }) => (
  <Wrapper size={size}>
    <Body />
    <Lines>
      <li />
      <li />
      <li />
      <li />
      <li />
    </Lines>
  </Wrapper>
)

export default PlanetBlue
