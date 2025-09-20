import React from 'react';
import StarBorder from './StarBorder';
import CardSwap, { Card } from './CardSwap';

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
        <div className="hero-layout">
          <div className="hero-text-content">
            <h1>DEUSMAR PERSONAL TRAINER</h1>
            <p className="subtitle">Transforme Seu Corpo e Sua Vida com Experiência de 10 Anos</p>
            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', flexWrap: 'wrap', marginTop: '40px' }}>
              <StarBorder as="a" href="#app-tour-section" color="red" speed="4s">
                QUERO SABER MAIS
              </StarBorder>
              <StarBorder as="a" href="#cta-form-section" color="red" speed="4s">
                ENTRE EM CONTATO
              </StarBorder>
            </div>
          </div>
          <div className="hero-card-swap">
            <CardSwap>
              <Card><h3>Sobre o Deusmar</h3></Card>
              <Card><h3>Sobre o APP</h3></Card>
              <Card><h3>Avaliações de outros alunos</h3></Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
