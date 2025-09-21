import React from 'react';

const CtaFormSection = () => {
  return (
    <section id="cta-form" className="cta-form-section">
      <div className="cta-form-container">
        <div className="cta-text-content">
          <h2 className="scroll-animate fade-in">Pronto Para Transformar Seu Corpo?</h2>
          <p className="scroll-animate fade-in delay-1">
            Não espere mais. Dê o primeiro passo em direção a uma vida mais saudável e forte.
            Cadastre-se para acesso antecipado ao nosso app exclusivo ou fale conosco diretamente.
          </p>
        </div>
        <div className="cta-form-wrapper">
          <form className="cta-form scroll-animate fade-in delay-2">
            <input type="text" placeholder="Seu Nome Completo" required />
            <input type="email" placeholder="Seu Melhor E-mail" required />
            <input type="tel" placeholder="Seu WhatsApp" required />
            <div className="form-buttons-container">
              <button type="submit" className="cta-button">QUERO COMEÇAR AGORA!</button>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="cta-button whatsapp-button">
                OU FALE NO WHATSAPP
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtaFormSection;
