import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

import featuredImage from '../img/featured.jpg'

export const HomePageTemplate = ({
  title,
  content,
  contentComponent,
  firstParagraph,
}) => {
  const PageContent = contentComponent || Content

  console.log(featuredImage)
  return (
    <div>
      <div className="flex reverse overlap section">
        <div className="column">
          <img src={featuredImage} />
          <a
            className="credit"
            target="_blank"
            href="http://heatherchippsphotography.com/"
          >
            photo by heather chipps photography
          </a>
        </div>
        <div className="large column">
          <p
            style={{
              width: '14.5em',
              margin: '0 auto',
              padding: '6em 1em 5em',
            }}
          >
            <span className="leadIn">{firstParagraph.leadIn}</span>
            <br />
            {firstParagraph.body}
          </p>
        </div>
      </div>
    </div>
  )
}

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  firstParagraph: PropTypes.shape({
    leadIn: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
}

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)

  return (
    <HomePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      firstParagraph={post.frontmatter.firstParagraph}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        firstParagraph {
          leadIn
          body
        }
      }
    }
  }
`
