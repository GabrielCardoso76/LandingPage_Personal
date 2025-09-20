import React from 'react';

const InfoBlocksSection = () => {
  return (
    <section className="info-blocks-section">
      <div className="info-block scroll-animate slide-left">
        <h2>Seu Treino na Palma da Mão</h2>
        <p>App Exclusivo Lançamento em Breve! Acompanhamento Completo, Treinos Personalizados, Metas e Mais. Tudo o que você precisa para alcançar seus resultados.</p>
        <div className="app-mockup">
          <img src="https://via.placeholder.com/250x500/000000/FFFFFF?text=App+Mockup" alt="Mockup do Aplicativo" className="app-image" />
        </div>
      </div>
      <div className="info-block dedication-block scroll-animate slide-right">
        <h2>10 Anos de Dedicação</h2>
        <p>Desde 2014, Deusmar tem mudado a vida de milhares de alunos. Planos sob medida, motivação constante e resultados garantidos.</p>
        <div className="testimonial">
          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Foto de Ana S." className="testimonial-photo" />
          <p className="testimonial-text">"Perdi 30kg e ganhei muita saúde com o Deusmar! - Ana S."</p>
        </div>
      </div>
    </section>
  );
};

export default InfoBlocksSection;
