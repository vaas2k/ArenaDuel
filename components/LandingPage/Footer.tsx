import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="section__container footer__container">
      <div className="logo footer__logo">
        <a href="#">DevBuddies</a>
      </div>
      <ul className="footer__links">
        <li><a href="#about">About</a></li>
        <li><a href="#project">Features</a></li>
        <li><a href="#community">Community</a></li>
        <li><a href="#resources">Mission</a></li>
      </ul>
    </div>
    <div className="footer__bar">
      Copyright © 2024 DevSage. All rights reserved.
    </div>
  </footer>
  )
}

export default Footer