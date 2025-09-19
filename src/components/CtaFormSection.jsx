import React from 'react';
import ScrollReveal from './ScrollReveal';

const CtaFormSection = () => {
  return (
    <section id="cta-form-section" className="cta-form-section">
      <h2><ScrollReveal>Pronto Para Transformar Seu Corpo?</ScrollReveal></h2>
      <p>Cadastre-se para ser um dos primeiros a ter acesso ao app e a uma consultoria exclusiva.</p>
      <form className="cta-form">
        <input type="text" placeholder="Seu Nome Completo" required />
        <input type="email" placeholder="Seu Melhor E-mail" required />
        <input type="tel" placeholder="Seu WhatsApp" required />
        <button type="submit" className="cta-button">QUERO COMEÇAR AGORA!</button>
      </form>
    </section>
  );
};

export default CtaFormSection;
