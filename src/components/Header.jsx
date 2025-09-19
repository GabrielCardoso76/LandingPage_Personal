import React from 'react';
import logo from '../assets/logo.png';
import StarBorder from './StarBorder';

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
        <div className="animate-on-load" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '40px' }}>
          <StarBorder as="a" href="#app-tour-section" color="red" speed="4s">
            QUERO SABER MAIS
          </StarBorder>
          <StarBorder as="a" href="#cta-form-section" color="red" speed="4s">
            ENTRE EM CONTATO
          </StarBorder>
        </div>
      </div>
    </header>
  );
};

export default Header;
