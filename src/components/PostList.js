import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title, isTopTitle = true } = this.props

    return (
      <section className="post-list">
        <div className="post-list__title">
          {isTopTitle ? (
            <h1>{title}</h1>
          ) : (
            <Fragment>
              <h1>Blog</h1>
              <p>
                Hé bien bonjour et bienvenue sur ce blog, on parle de code, de
                CSS et de design. Vous retrouverez des tutoriels, des séries
                d'articles sur des thèmes précis, des expériences et je partage
                aussi avec vous des ressources qui m'ont bien servi.
              </p>
              <h2>{title}</h2>
            </Fragment>
          )}
        </div>
        {posts.map(({ node: post }) => (
          <div className="post-list__single" key={post.id}>
            <AniLink
              cover
              direction="top"
              bg="#42406f"
              duration={1}
              className="post-list__single__title"
              to={post.slug}
              dangerouslySetInnerHTML={{ __html: post.title }}
            ></AniLink>
            <div className="post-list__single__meta">
              <span>{post.date}</span> <span>-</span>{' '}
              <AniLink
                swipe
                direction="bottom"
                duration={1}
                to={`/author/${post.author.slug}`}
              >
                {post.author.name}
              </AniLink>
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
