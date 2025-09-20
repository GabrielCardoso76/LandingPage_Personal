import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2 className="scroll-animate fade-in">Mais Depoimentos de Quem Transformou</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card scroll-animate scale-in">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Foto de João" className="testimonial-photo-small" />
          <p>"A melhor decisão que tomei. Deusmar é um profissional incrível." - João</p>
        </div>
        <div className="testimonial-card scroll-animate scale-in delay-1">
          <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="Foto de Camila" className="testimonial-photo-small" />
          <p>"Superou todas as minhas expectativas. Recomendo de olhos fechados!" - Camila</p>
        </div>
        <div className="testimonial-card scroll-animate scale-in delay-2">
          <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Foto de Pedro" className="testimonial-photo-small" />
          <p>"Finalmente consegui manter a consistência. O app é um divisor de águas!" - Pedro</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
