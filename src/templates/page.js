import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import ReactHtmlParser from 'react-html-parser'
import Layout from '../components/Layout'

export const PageTemplate = ({ title, content }) => {
  return (
    <article className="post type-post">
      <div className="post-inner thin">
        <div className="entry-content">
          <header className="entry-header">
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
          </header>
        </div>

        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wordpressPage: page } = data
  return (
    <Layout>
      <Helmet>
        {ReactHtmlParser(page.yoast_head)}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <PageTemplate title={page.title} content={page.content} />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      yoast_head
    }
  }
`
