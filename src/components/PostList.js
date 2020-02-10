import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

export default class IndexPage extends React.Component {
  render() {
    const { posts } = this.props

    return (
      <section className="post-list">
        {posts.map(({ node: post }) => (
          <div className="post-list__single" key={post.id}>
            <Link className="post-list__single__title" to={post.slug}>
              {post.title}
            </Link>
            <div className="post-list__single__meta">
              <span>{post.date}</span>{' '}<span>-</span>{' '}
              <Link to={`/author/${post.author.slug}`}>{post.author.name}</Link>
            </div>
            <div
              className="post-list__single__excerpt"
              dangerouslySetInnerHTML={{
                __html: post.excerpt.replace(/<p class="link-more.*/, ''),
              }}
            />
          </div>
        ))}
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "DD/MM/YYYY")
    slug
  }
`
