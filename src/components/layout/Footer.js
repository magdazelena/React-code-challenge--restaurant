import React from 'react';

function Footer() {
  return (
    <footer>
      <nav>
        <ul class="footer-menu">
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
    </footer>
  )
}
export default Footer;