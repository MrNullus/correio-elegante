import { useState } from "react";

import ImageLogo from "../../assets/image/logos/logo-nobg.png";
import "./styles.scss";

function Header({ type }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`app__header header-${type}`}>
      <div className="container-image-logo">
        <img
          className="header__image-logo logo-image"
          alt="Correio Elegante"
          src={ImageLogo}
        />
      </div>

      <h1 className="header__text-logo logo-text">Correio Elegante</h1>

      <div className="header__icon-action">
        <button className="btn btn-menu" onClick={handleShowMenu}>
          ☰
        </button>
      </div>
      {showMenu && (
        <menu>
          <item className="btn-close" onClick={handleShowMenu}>
            X
          </item>

          {type === "admin" ? (
            <>
              <item>
                <a href="/admin/dashboard">Home</a>
              </item>
            </>
          ) : (
            <>
              <item>
                <a href="/">
                  <i className="fi fi-rr-house-blank"></i>
                  &nbsp; Home
                </a>
              </item>

              <item>
                <a href="/our-catalogue">
                  <i className="fi fi-rr-newspaper-open"></i>
                  &nbsp; Nosso Catálogo
                </a>
              </item>

              <item>
                <a href="/create-my-mail">
                  <i className="fi fi-rr-envelope-plus"></i>
                  &nbsp; Criar meu Corrreio
                </a>
              </item>

              <item>
                <a href="/check-mail">
                  <i className="fi fi-tr-envelope-open-text"></i>
                  &nbsp; Conferir Corrreio
                </a>
              </item>

              <item>
                <a href="/help-me-amorim">
                  <i className="fi fi-rr-heart-arrow"></i>
                  &nbsp; Ajuda-me Amorim
                </a>
              </item>

              <item>
                <a href="/report">
                  <i className="fi fi-rr-hexagon-exclamation"></i>
                  &nbsp; Reportar
                </a>
              </item>

              <item>
                <hr className="separator" />
              </item>

              <item>
                <a href="/auth/login">
                  <i className="fi fi-rr-clipboard-user"></i>
                  &nbsp; Login
                </a>
              </item>
            </>
          )}
        </menu>
      )}
    </header>
  );
}

export default Header;
