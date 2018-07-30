import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry, getAsset, widgetFor }) => (
  <HomePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    firstParagraph={{
      leadIn: entry.getIn(['data', 'firstParagraph', 'leadIn']),
      body: entry.getIn(['data', 'firstParagraph', 'body']),
      image: {
        image: getAsset(entry.getIn(['data', 'firstParagraph', 'image', 'image'])),
        credit: entry.getIn(['data', 'firstParagraph', 'image', 'credit']),
        creditUrl: entry.getIn(['data', 'firstParagraph', 'image', 'creditUrl']),
      }
    }}
  />
)

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HomePagePreview
