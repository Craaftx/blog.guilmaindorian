import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import Layout from '../components/Layout'
import PlanetDisplayer from '../components/PlanetDisplayer'
import useSiteMetadata from '../utils/useSiteMetadata'
import AnimationLink from '../utils/AnimationLink'

export const BlogPostTemplate = ({
  content,
  categories,
  slug,
  tags,
  title,
  date,
  author,
}) => {
  const { siteUrl } = useSiteMetadata()
  const disqusConfig = {
    url: `${siteUrl}/${slug}`,
    identifier: slug,
    title,
  }
  return (
    <>
      <PlanetDisplayer category={categories[0].slug} isOnSinglePage />
      <article className="post type-post">
        <div className="post-inner thin">
          <div className="entry-content">
            <header className="entry-header">
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
              <div className="header-meta-wrapper">
                <span>{`Posté le ${date} par `}</span>{' '}
                <AnimationLink to={`/author/${author.slug}`}>
                  {author.name}
                </AnimationLink>{' '}
                <span>dans</span>{' '}
                {categories.map(category => (
                  <AnimationLink
                    to={`/categories/${category.slug}/`}
                    key={`${category.slug}cat`}
                  >
                    {category.name}
                  </AnimationLink>
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
                        <AnimationLink to={`/tags/${tag.slug}/`}>
                          {tag.name}
                        </AnimationLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="post-meta-author">
                <small>Auteur</small>
                <img
                  src={author.avatar_urls.wordpress_96}
                  alt="Profil de l'auteur"
                />
                <AnimationLink to={`/author/${author.slug}`}>
                  {author.name}
                </AnimationLink>
                <p>{author.description}</p>
              </div>
              <div className="post-meta-share">
                <FacebookShareButton url={`${siteUrl}/${slug}`}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={`${siteUrl}/${slug}`}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LinkedinShareButton url={`${siteUrl}/${slug}`}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <RedditShareButton url={`${siteUrl}/${slug}`}>
                  <RedditIcon size={32} round />
                </RedditShareButton>
                <EmailShareButton url={`${siteUrl}/${slug}`}>
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </div>
              <div className="post-meta-comments">
                <CommentCount config={disqusConfig} placeholder="..." />
                <Disqus config={disqusConfig} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
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
        slug={post.slug}
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
