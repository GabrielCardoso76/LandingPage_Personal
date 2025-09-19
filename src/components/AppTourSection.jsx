import React from 'react';
import ScrollReveal from './ScrollReveal';

const AppTourSection = () => {
  return (
    <section id="app-tour-section" className="app-tour-section">
      <h2><ScrollReveal>Tour Rápido pelo App</ScrollReveal></h2>
      <div className="video-container">
        <img src="https://via.placeholder.com/900x500/000000/FFFFFF?text=Video+Tour+do+App" alt="Placeholder de Vídeo do App" className="video-placeholder-image" />
      </div>
      <div className="features-grid">
        <div className="feature-item">
          <img src="https://img.icons8.com/ios-filled/50/B50B10/dumbbell.png" alt="Ícone de Haltere" className="feature-icon" />
          <h3>Treinos Personalizados</h3>
        </div>
        <div className="feature-item">
          <img src="https://img.icons8.com/ios-filled/50/B50B10/increase-graph.png" alt="Ícone de Gráfico" className="feature-icon" />
          <h3>Acompanhamento de Progresso</h3>
        </div>
        <div className="feature-item">
          <img src="https://img.icons8.com/ios-filled/50/B50B10/healthy-food.png" alt="Ícone de Comida Saudável" className="feature-icon" />
          <h3>Planos de Dieta</h3>
        </div>
      </div>
    </section>
  );
};

export default AppTourSection;
