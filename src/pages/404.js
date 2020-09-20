import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <article className="post type-post">
      <div className="post-inner thin">
        <div className="entry-content">
          <h1>C&apos;est pas par ici</h1>
          <p>
            La page que tu cherches n&apos;est pas ici ou n&apos;y est plus.
          </p>
        </div>
      </div>
    </article>
  </Layout>
)

export default NotFoundPage
