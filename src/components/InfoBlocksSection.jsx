import React from 'react';
import logo from '../assets/logo.png';
import appMockupImage from '../assets/playstoryapp.png';

const InfoBlocksSection = () => {
  return (
    <section className="info-blocks-section">
      <div className="info-block scroll-animate slide-left">
        <h2>Seu Treino na Palma da Mão</h2>
        <p>App Exclusivo Lançamento em Breve! Acompanhamento Completo, Treinos Personalizados, Metas e Mais. Tudo o que você precisa para alcançar seus resultados.</p>
        <div className="app-mockup">
          <img src={appMockupImage} alt="Mockup do Aplicativo" className="app-image" />
        </div>
      </div>
      <div className="info-block dedication-block scroll-animate slide-right">
        <img src={logo} alt="Logo" className="logo" style={{ marginBottom: '20px', width: '490px' }} />
        <p>
          Mais que um personal trainer, sou um arquiteto de transformações. Com anos de experiência internacional e uma metodologia baseada em dados precisos, desenvolvo estratégias personalizadas que transcendem os limites convencionais do fitness.
        </p>
        <p>
          Minha filosofia combina ciência, tecnologia e dedicação absoluta para entregar resultados mensuráveis e duradouros, independentemente de onde você esteja no mundo.
        </p>
        <div className="stats-container">
          <div className="stat-item">
            <h3>200+</h3>
            <p>transformações</p>
          </div>
          <div className="stat-item">
            <h3>7+</h3>
            <p>países atendidos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBlocksSection;
