import React from 'react'

const MoonIllustration = ({ starsAmout }) => (
  <div className="moon-illustration">
    <div className="moon"></div>
    {[...Array(starsAmout)].map(() => (
      <span class="star"></span>
    ))}
    <div className="moon-fill"></div>
  </div>
)

export default MoonIllustration
