import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul className="main-menu">
          <li>
            <a href="/" aria-label="Back to front page" id="logo">
              <img src="./images/logo.svg" alt="Sundown Boulevard logo" />
            </a>
          </li>
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