import React from 'react';

const CtaFormSection = () => {
  return (
    <section className="cta-form-section">
      <h2 className="scroll-animate fade-in">Pronto Para Transformar Seu Corpo?</h2>
      <p className="scroll-animate fade-in delay-1">Cadastre-se para ser um dos primeiros a ter acesso ao app e a uma consultoria exclusiva.</p>
      <form className="cta-form scroll-animate fade-in delay-2">
        <input type="text" placeholder="Seu Nome Completo" required />
        <input type="email" placeholder="Seu Melhor E-mail" required />
        <input type="tel" placeholder="Seu WhatsApp" required />
        <button type="submit" className="cta-button">QUERO COMEÇAR AGORA!</button>
      </form>
    </section>
  );
};

export default CtaFormSection;
