import React from 'react';
import './styles.css';

import Header from './components/Header';
import InfoBlocksSection from './components/InfoBlocksSection';
import AppTourSection from './components/AppTourSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaFormSection from './components/CtaFormSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <InfoBlocksSection />
        <AppTourSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CtaFormSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
