import React from 'react'
import Link from 'gatsby-link'

import mark from '../img/OOmark.png'

console.log(mark)

const Footer = () => (
  <div>
    <div className="divider" />

    <div className="footer section">
      <div className="centered flex section">
        <div className="half column">
          <a className="social" rel="ck_modal" href="#ck_modal">
            newsletter
          </a>
        </div>
        <div className="half column">
          <a
            className="social"
            target="_blank"
            href="https://instagram.com/oneandonlypaper"
          >
            instagram
          </a>
        </div>
        <div className="half column">
          <div className="mark">
            <a href="https://www.instagram.com/explore/tags/oopaper/">
              <img src={mark} />
            </a>
          </div>
        </div>
        <div className="half column">
          <a
            className="social"
            target="_blank"
            href="https://pinterest.com/oneandonlypaper"
          >
            pinterest
          </a>
        </div>
        <div className="half column">
          <a
            className="social"
            target="_blank"
            href="mailto:alison@oneandonlypaper.com"
          >
            email
          </a>
        </div>
      </div>
      <div className="credits">
        all images by{' '}
        <a target="_blank" href="http://www.mikkelpaige.com/">
          Mikkel Paige Photography
        </a>{' '}
        unless otherwise noted. We &lt;3 Mikkel!
      </div>
    </div>
  </div>
)

export default Footer
