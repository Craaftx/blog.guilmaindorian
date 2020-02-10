import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  author,
}) => {
  return (
    <article className="post type-post">
      <div className="post-inner thin">
        <div className="entry-content">
          <header class="entry-header">
            <h1>{title}</h1>
            <div className="header-meta-wrapper">
              <span>Posté le {date} par </span>{' '}
              <Link to={`/author/${author.slug}`}>{author.name}</Link>
              <span>dans</span>{' '}
              {categories.map(category => (
                <Link
                  to={`/categories/${category.slug}/`}
                  key={`${category.slug}cat`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </header>
        </div>
        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="entry-content">
          <div className="post-meta-wrapper">
            {tags && tags.length ? (
              <div className="post-meta-tags">
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={`${tag.slug}tag`}>
                      <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="post-meta-author">
              <small>Auteur</small>
              <img src={author.avatar_urls.wordpress_96} />
              <Link to={`/author/${author.slug}`}>{author.name}</Link>
              <p>{author.description}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data
  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "DD/MM/YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "DD/MM/YYYY")
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
      author {
        name
        description
        avatar_urls {
          wordpress_96
        }
        slug
      }
    }
  }
`
