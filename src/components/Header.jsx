import React from 'react';
import StarBorder from './StarBorder';
import CardSwap, { Card } from './CardSwap';
import RotatingText from './RotatingText';

const Header = () => {
  const logoUrl = 'https://via.placeholder.com/90x90?text=Logo';
  const rotatingTexts = [
    "Transforme Seu Corpo e Sua Vida",
    "Com Experiência de 10 Anos",
    "Resultados Garantidos e Motivação"
  ];

  return (
    <header className="hero-section">
      <div className="hero-content">
        <div className="hero-layout">
          <div className="hero-text-content">
            <h1>DEUSMAR PERSONAL TRAINER</h1>
            <div className="subtitle">
              <span>Transforme</span>
              <RotatingText
                texts={['Seu Corpo', 'Sua Vida']}
                mainClassName="rotating-text-background"
                splitBy="words"
              />
            </div>
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
            <CardSwap width={600} height={480}>
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
