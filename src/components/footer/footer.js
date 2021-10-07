import React from 'react';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer wrapper">
      <nav className="footer__nav container">
        <a className="footer__item text text_grey link" href="#">
          Support
        </a>
        <a className="footer__item text text_grey link" href="#">
          Learning
        </a>
        <a className="footer__item text text_grey link" href="#">
          Русская версия
        </a>
        <span className="footer__item footer__item_copy text text_grey">
          © 2021 Peter Yakovlev
        </span>
      </nav>
    </footer>
  );
}