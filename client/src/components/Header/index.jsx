import React from 'react';
import { MdAdminPanelSettings } from 'react-icons/md';
import ImageLogo from "../../assets/image/logo-nobg.png"; 


function Header() {
  return (
    <header style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',       
      alignItems: 'center',
      borderRadius: '4px',
      padding: '1.9rem 0',
      marginBottom: '3rem',
    }}> 
      <div>
        <img 
          className='image-logo logo'
          alt='Correio Elegante'
          src={ ImageLogo  }
        />
      </div>

      <h1 className='text-logo'>
        Correio Elegante
      </h1>

      <div style={{ fontSize: '2.4rem' }}>
        <a href="/login" style={{ color: 'rgb(253,40,104)' }}>
          <MdAdminPanelSettings />
        </a>
      </div>
    </header>
  );
}

export default Header;