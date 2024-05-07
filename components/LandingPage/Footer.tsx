import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="section__container footer__container">
      <div className="logo footer__logo">
        <a href="#">VETA</a>
      </div>
      <ul className="footer__links">
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#community">Community</a></li>
        <li><a href="#resources">Resources</a></li>
      </ul>
    </div>
    <div className="footer__bar">
      Copyright © 2024 Web Design Mastery. All rights reserved.
    </div>
  </footer>
  )
}

export default Footer