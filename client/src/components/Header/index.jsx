import { useState } from "react";

import ImageLogo from "../../assets/image/logo-nobg.png"; 

import { MdAdminPanelSettings } from 'react-icons/md';
import { CiMenuKebab } from "react-icons/ci";

import './style.css'; 

function Header({ type }) {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`header header-${type}`}> 
      <div className='container-image-logo'>
        <img 
          className='header__image-logo image-logo logo'
          alt='Correio Elegante'
          src={ ImageLogo  }
        />
      </div>

      <h1 className='header__text-logo text-logo'>
        Correio Elegante
      </h1>

      <div className='header__icon-action'>
        {
          type === 'guest'?
          (<a href="/auth/login" style={{ color: 'rgb(253,40,104)' }}>
            <MdAdminPanelSettings />
          </a>)
            :
          (
            <button 
              className='btn btn-menu'
              onClick={handleShowMenu}
            >
              ☰
            </button>
          )
        }
      </div>
      
      { (showMenu && type === 'admin') && (
        <menu>
          <item 
            className='btn-close'
            onClick={handleShowMenu}
          >
            X
          </item>
          <item>
            <a href='/dashboard'>
              Home
            </a>
          </item>
        </menu>
      )}
    </header>
  );
}

export default Header;
