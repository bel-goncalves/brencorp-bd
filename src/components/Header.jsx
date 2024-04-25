import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <a href="./">
        <img height="54px" src="/img/logo-brencorp.png" alt="Logo" />
      </a>
      <nav className="headerNav">
        <ul className="headerUl">
          <li>
            <a href="">
              <img src="/img/FolderFilled.svg" />
              Consultores
            </a>
          </li>
          <li>
            <a href="">
              <img src="/img/LogoutFilled.svg" alt="" />
              Sair
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
