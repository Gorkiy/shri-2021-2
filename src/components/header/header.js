import React from 'react';
import './header.scss';

export const Header = props => {
  const { page, title, children } = props;

  return (
    <header className="main__header header wrapper">
      <div className="header__container container">
        <h1 className={`header__title header__title_${page}`}>
          {title ? title : 'School CI server'}
        </h1>
        {children &&
          <div className="header__buttons">
            {children}
          </div>
        }
      </div>
    </header>
  );
}