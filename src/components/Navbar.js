import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = () => (
  <div className="header">
    <ul className="nav">
      <li>
        <Link to="/custom/consultation/" className="consultation">
          REQUEST A CONSULTATION
        </Link>
      </li>
      <li>
        <a href="/blog/">BLOG</a>
      </li>
      <li>
        <Link to="/#about">ABOUT</Link>
      </li>
      <li>
        <a rel="ck_modal" href="#ck_modal">
          NEWSLETTER
        </a>
      </li>
      <li>
        <Link to="/#work">WORK</Link>
      </li>
      <li>
        <a href="https://hello.dubsado.com:443/public/client/portal/589cdb9ef35f067b7cc778ab">
          PORTAL
        </a>
      </li>
    </ul>
    <div className="logo">
      <Link to="/">
        <img src={logo} />
      </Link>
    </div>
    <div className="menu">
      <img src="https://unpkg.com/material-design-icons@3.0.1/navigation/svg/production/ic_menu_48px.svg" />
    </div>
  </div>
)

export default Navbar
