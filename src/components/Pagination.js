import React from 'react'
import AnimationLink from '../utils/AnimationLink'

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <nav className="pagination" role="navigation">
      <div className="navbar navbar-menu">
        {previousPagePath && (
          <div className="navbar-item">
            <AnimationLink to={previousPagePath} rel="prev">
              Previous
            </AnimationLink>
          </div>
        )}
        {nextPagePath && (
          <div className="navbar-item">
            <AnimationLink to={nextPagePath} rel="next">
              Next
            </AnimationLink>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Pagination
