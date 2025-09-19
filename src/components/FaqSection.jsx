import React from 'react';

const FaqSection = () => {
  return (
    <section className="faq-section">
      <h2 className="scroll-animate fade-in">Perguntas Frequentes</h2>
      <div className="faq-items scroll-animate slide-up">
        <p>• Como funciona a consultoria?</p>
        <p>• O app é compatível com meu celular?</p>
        <p>• O que está incluído no plano?</p>
      </div>
    </section>
  );
};

export default FaqSection;
