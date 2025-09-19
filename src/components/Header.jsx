import React from 'react';
import StarBorder from './StarBorder';

const Header = () => {
  const logoUrl = 'https://via.placeholder.com/90x90?text=Logo';
  return (
    <header className="hero-section">
      <div className="header-container">
        <div className="logo-container">
          <img src={logoUrl} alt="Logo DPJ Personal Trainer" className="logo" />
          <span className="logo-text">PERSONAL TRAINER</span>
        </div>
      </div>
      <div className="hero-content">
        <h1>DEUSMAR PERSONAL TRAINER</h1>
        <p className="subtitle">Transforme Seu Corpo e Sua Vida com Experiência de 10 Anos</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '40px' }}>
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
