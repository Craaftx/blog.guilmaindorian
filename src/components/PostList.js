import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AnimationLink from '../utils/AnimationLink'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title, isTopTitle = true } = this.props

    return (
      <section className="post-list">
        <div className="post-list__title">
          {isTopTitle ? (
            <h1>{title}</h1>
          ) : (
            <>
              <h1>Blog</h1>
              <p>
                Hé salut, ici on parle de code, de CSS, de design et surement
                d&apos;autres trucs. Tu retrouveras des séries d&apos;articles,
                des tutoriels, plein d&apos;expériences et des ressources
                intéressantes.
              </p>
              <h2>{title}</h2>
            </>
          )}
        </div>
        {posts.map(({ node: post }) => (
          <div className="post-list__single" key={post.id}>
            <AnimationLink
              cover
              direction="top"
              bg="#42406f"
              duration={1}
              className="post-list__single__title"
              to={`/${post.slug}`}
            >
              <span>{post.title}</span>
            </AnimationLink>
            <div className="post-list__single__meta">
              <span>{post.date}</span>
              &nbsp;
              <span>-</span>
              &nbsp;
              <AnimationLink
                swipe
                direction="bottom"
                duration={1}
                to={`/author/${post.author.slug}`}
              >
                {post.author.name}
              </AnimationLink>
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
