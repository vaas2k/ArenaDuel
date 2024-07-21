import React from 'react';

const Footer = () => {
  return (
    <footer className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="logo footer__logo">
          <a href="#" className=" font-bold text-xl mb-4 md:mb-0">
            DevBuddies
          </a>
        </div>
        <ul className="footer__links flex flex-col md:flex-row gap-4 ">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Features</a>
          </li>
          <li>
            <a href="#community">Community</a>
          </li>
          <li>
            <a href="#resources">Mission</a>
          </li>
        </ul>
      </div>
      <div className="footer__bar text-center mt-8">
        Copyright © 2024 DevSage. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;