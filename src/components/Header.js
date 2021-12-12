import React from 'react';
import logoPath from '../blocks/images/logo.svg';

export default function Header({link, text, loggedIn, email = ''}) {
  return (
      <header className="header">
        <img
          className="header__logo"
          src={logoPath}
          alt="around the u.s. logo"
        />
        <div className="header__container">
          {loggedIn && <p className="header__email">{email}</p>}
          <a className="header__link" href={link}>{text}</a>
        </div>
      </header>
  );
}
