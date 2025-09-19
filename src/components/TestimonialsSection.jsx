import React from 'react';
import ScrollReveal from './ScrollReveal';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2><ScrollReveal>Mais Depoimentos de Quem Transformou</ScrollReveal></h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Foto de João" className="testimonial-photo-small" />
          <p>"A melhor decisão que tomei. Deusmar é um profissional incrível." - João</p>
        </div>
        <div className="testimonial-card">
          <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="Foto de Camila" className="testimonial-photo-small" />
          <p>"Superou todas as minhas expectativas. Recomendo de olhos fechados!" - Camila</p>
        </div>
        <div className="testimonial-card">
          <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Foto de Pedro" className="testimonial-photo-small" />
          <p>"Finalmente consegui manter a consistência. O app é um divisor de águas!" - Pedro</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
