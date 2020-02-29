import React from 'react'

const Moon = ({ starsAmout }) => (
  <div className="moon-illustration">
    <div className="moon"></div>
    {[...Array(starsAmout)].map((index) => (
      <span key={index} className="star"></span>
    ))}
    <div className="moon-fill"></div>
  </div>
)

export default Moon
