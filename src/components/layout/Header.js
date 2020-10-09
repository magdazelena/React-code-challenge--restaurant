import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <a href="/" aria-label="Back to front page" id="logo">
          <img src="./images/logo.svg" alt="Sundown Boulevard logo" />
        </a>
        <ul className="main-menu">
          <li>
            <a href="/">
              Restauranter
            </a>
          </li>
          <li>
            <a href="/">
              Produkter
            </a>
          </li>
          <li>
            <a href="/">
              Nyhedsbrev
            </a>
          </li>
          <li>
            <a href="/">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header;