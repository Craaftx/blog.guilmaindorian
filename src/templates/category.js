import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import PlanetDisplayer from '../components/PlanetDisplayer'

const Category = props => {
  const { data, pageContext } = props
  const { edges: posts, totalCount } = data.allWordpressPost
  const { title: siteTitle } = data.site.siteMetadata
  const { name: category, slug } = pageContext
  const title = `${totalCount} publication${
    totalCount === 1 ? '' : 's'
  } dans la catégorie “${category}”`

  return (
    <Layout>
      <Helmet title={`${category} | ${siteTitle}`} />
      <PlanetDisplayer category={slug} isOnSinglePage />
      <PostList posts={posts} title={title} />
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query CategoryPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      totalCount
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`
