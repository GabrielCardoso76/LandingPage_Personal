import React from 'react';
import ScrollReveal from './ScrollReveal';

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <h2><ScrollReveal>Por Que Treinar Com Deusmar?</ScrollReveal></h2>
      <div className="benefits-grid">
        <div className="benefit-item">
          <img src="https://img.icons8.com/ios-filled/50/FFFFFF/trophy.png" alt="Ícone de Troféu" className="benefit-icon" />
          <h3>Resultados Reais</h3>
          <p>Foco na sua meta com treinos cientificamente comprovados.</p>
        </div>
        <div className="benefit-item">
          <img src="https://img.icons8.com/ios-filled/50/FFFFFF/calendar.png" alt="Ícone de Calendário" className="benefit-icon" />
          <h3>Flexibilidade Total</h3>
          <p>Treine onde e quando quiser com o seu novo app.</p>
        </div>
        <div className="benefit-item">
          <img src="https://img.icons8.com/ios-filled/50/FFFFFF/chat.png" alt="Ícone de Chat" className="benefit-icon" />
          <h3>Suporte Descomplicado</h3>
          <p>Tire suas dúvidas diretamente com o personal.</p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
