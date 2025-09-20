import React from 'react';

const AppTourSection = () => {
  return (
    <section id="app-tour-section" className="app-tour-section">
      <h2 className="scroll-animate fade-in">Tour Rápido pelo App</h2>
      <div className="video-container scroll-animate fade-in">
        <img src="https://via.placeholder.com/900x500/000000/FFFFFF?text=Video+Tour+do+App" alt="Placeholder de Vídeo do App" className="video-placeholder-image" />
      </div>
      <div className="features-grid">
        <div className="feature-item scroll-animate slide-up">
          <img src="https://img.icons8.com/ios-filled/50/B50B10/dumbbell.png" alt="Ícone de Haltere" className="feature-icon" />
          <h3>Treinos Personalizados</h3>
        </div>
        <div className="feature-item scroll-animate slide-up delay-1">
          <img src="https://img.icons8.com/ios-filled/50/B50B10/combo-chart.png" alt="Ícone de Gráfico" className="feature-icon" />
          <h3>Acompanhamento de Progresso</h3>
        </div>
        <div className="feature-item scroll-animate slide-up delay-2">
          <img src="https://img.icons8.com/ios-filled/50/B50B10/chat.png" alt="Ícone de Suporte" className="feature-icon" />
          <h3>Suporte 24/7</h3>
        </div>
      </div>
    </section>
  );
};

export default AppTourSection;
