import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="hero-section">
      <div className="header-container">
        <div className="logo-container animate-on-load">
          <img src={logo} alt="Logo DPJ Personal Trainer" className="logo" />
          <span className="logo-text">PERSONAL TRAINER</span>
        </div>
      </div>
      <div className="hero-content">
        <h1 className="animate-on-load">DEUSMAR PERSONAL TRAINER</h1>
        <p className="subtitle animate-on-load">Transforme Seu Corpo e Sua Vida com Experiência de 10 Anos</p>
        <a href="#app-tour-section" className="cta-button animate-on-load">QUERO SABER MAIS</a>
      </div>
    </header>
  );
};

export default Header;
