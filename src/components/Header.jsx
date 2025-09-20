import React from 'react';
import StarBorder from './StarBorder';
import CardSwap, { Card } from './CardSwap';
import RotatingText from './RotatingText';
import logo from '../assets/logo.png';

const Header = () => {
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
            <img src={logo} alt="Deusmar Personal Trainer" style={{ width: '450px', marginBottom: '20px' }}/>
            <div className="subtitle">
              <span>Transforme</span>
              <RotatingText
                texts={['Seu Corpo', 'Sua Vida']}
                mainClassName="rotating-text-background"
                splitBy="words"
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
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
