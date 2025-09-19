import React from 'react';
import ScrollReveal from './ScrollReveal';

const FaqSection = () => {
  return (
    <section className="faq-section">
      <h2><ScrollReveal>Perguntas Frequentes</ScrollReveal></h2>
      <div className="faq-items">
        <p>• Como funciona a consultoria?</p>
        <p>• O app é compatível com meu celular?</p>
        <p>• O que está incluído no plano?</p>
      </div>
    </section>
  );
};

export default FaqSection;
