import React from 'react'

const Moon = ({ starsAmout }) => (
  <div className="moon-illustration">
    <div className="moon" />
    {[...Array(starsAmout)].map(index => (
      <span key={index} className="star" />
    ))}
    <div className="moon-fill" />
  </div>
)

export default Moon
