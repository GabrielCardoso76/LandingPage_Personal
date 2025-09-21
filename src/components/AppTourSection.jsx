import React, { useState, useEffect } from 'react';
import imagemProgresso from '../assets/informacoes.jpeg';
import imagemAvaliacoes from '../assets/inicial.jpeg';
import imagemSupervisao from '../assets/postural.jpeg';

const slides = [
  {
    id: 'progresso',
    image: imagemProgresso,
    cards: [
      {
        title: "Acompanhe seu progresso",
        description: "Insira cargas e repetições a cada treino e veja sua evolução em gráficos detalhados.",
        variant: 'white',
        targetId: 'progresso'
      },
      {
        title: "Avaliações sempre com você",
        description: "Faça o download de suas avaliações físicas e posturais diretamente no app.",
        variant: 'red',
        targetId: 'avaliacoes'
      },
      {
        title: "Supervisão total",
        description: "Meu acompanhamento contínuo sobre seu desempenho para ajustes precisos no seu plano.",
        variant: 'white',
        targetId: 'supervisao'
      }
    ]
  },
  {
    id: 'avaliacoes',
    image: imagemAvaliacoes,
    cards: [
      {
        title: "Peito e Tríceps Fortalecidos",
        description: "Visualize seu plano de treino do dia com foco em peito e tríceps.",
        variant: 'white',
        targetId: 'progresso'
      },
      {
        title: "Séries e Repetições Claras",
        description: "Acesse rapidamente os detalhes de cada exercício do seu treino.",
        variant: 'red',
        targetId: 'avaliacoes'
      },
      {
        title: "Navegação Intuitiva",
        description: "Alterne facilmente entre os dias da semana para ver seus treinos futuros.",
        variant: 'white',
        targetId: 'supervisao'
      }
    ]
  },
  {
    id: 'supervisao',
    image: imagemSupervisao,
    cards: [
      {
        title: "Análise Postural Completa",
        description: "Receba uma análise detalhada da sua postura com marcações visuais precisas.",
        variant: 'white',
        targetId: 'progresso'
      },
      {
        title: "Feedback Especializado",
        description: "Entenda os pontos de melhoria com o feedback direto do seu treinador.",
        variant: 'red',
        targetId: 'avaliacoes'
      },
      {
        title: "Resultados na Mão",
        description: "Salve e consulte suas avaliações posturais quando e onde quiser.",
        variant: 'white',
        targetId: 'supervisao'
      }
    ]
  }
];

const AppTourSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (targetId) => {
    const targetIndex = slides.findIndex(slide => slide.id === targetId);
    if (targetIndex !== -1) {
      setActiveIndex(targetIndex);
    }
  };

  const currentSlide = slides[activeIndex];

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
                <img
                  src={currentSlide.image}
                  alt="App Screenshot"
                  className="app-screenshot"
                />
              </div>
            </div>
          </div>
        </div>

        <svg className="connecting-lines" viewBox="0 0 1000 650" preserveAspectRatio="none">
          <line x1="480" y1="130" x2="400" y2="325" />
          <line x1="480" y1="325" x2="400" y2="325" />
          <line x1="480" y1="520" x2="400" y2="325" />
        </svg>

        <div className="app-tour-features">
          {currentSlide.cards.map((card, index) => (
            <div
              key={index}
              className={`app-tour-feature-item card-variant-${card.variant} ${slides[activeIndex].id === card.targetId ? 'active' : ''}`}
              onClick={() => handleCardClick(card.targetId)}
            >
              {card.variant === 'red' && <span className="card-bg-text">Avaliações</span>}
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppTourSection;
