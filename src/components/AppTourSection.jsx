import React, { useState, useEffect } from 'react';
import imagemProgresso from '../assets/informacoes.jpeg';
import imagemAvaliacoes from '../assets/inicial.jpeg';
import imagemSupervisao from '../assets/postural.jpeg';

const features = [
  {
    title: "Acompanhe seu progresso",
    description: "Insira cargas e repetições a cada treino e veja sua evolução em gráficos detalhados.",
    image: imagemProgresso,
    variant: 'white'
  },
  {
    title: "Avaliações sempre com você",
    description: "Faça o download de suas avaliações físicas e posturais diretamente no app.",
    image: imagemAvaliacoes,
    variant: 'red'
  },
  {
    title: "Supervisão total",
    description: "Meu acompanhamento contínuo sobre seu desempenho para ajustes precisos no seu plano.",
    image: imagemSupervisao,
    variant: 'white'
  }
];

const AppTourSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="app-tour-section" className="app-tour-section">
      <div className="background-text-container">
        <span className="background-text-item">Aplicativo</span>
        <span className="background-text-item">App</span>
        <span className="background-text-item">Apli</span>
      </div>

      <h2 className="scroll-animate fade-in">A revolução do seu treino na palma da mão</h2>

      <div className="app-tour-layout">

        <div className="phone-mockup-container">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                {features.map((feature, index) => (
                    <img
                        key={index}
                        src={feature.image}
                        alt="App Screenshot"
                        className={`app-screenshot ${index === activeIndex ? 'visible' : ''}`}
                    />
                ))}
              </div>
            </div>
          </div>
        </div>

        <svg className="connecting-lines" viewBox="0 0 1000 650" preserveAspectRatio="none">
          <line x1="600" y1="130" x2="480" y2="230" />
          <line x1="600" y1="325" x2="480" y2="325" />
          <line x1="600" y1="520" x2="480" y2="420" />
        </svg>

        <div className="app-tour-features" key={activeIndex}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`app-tour-feature-item card-variant-${feature.variant} ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              {feature.variant === 'red' && <span className="card-bg-text">Avaliações</span>}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppTourSection;
