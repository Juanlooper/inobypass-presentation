import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import HeroSection from './components/HeroSection';
import FallingPillsBackground from './components/FallingPillsBackground';
import NavigationMenu from './components/NavigationMenu';


const DoctorSection = React.lazy(() => import('./components/DoctorSection'));
const ScienceSection = React.lazy(() => import('./components/ScienceSection'));
const LadmeSection = React.lazy(() => import('./components/LadmeSection'));
const InteractionsSection = React.lazy(() => import('./components/InteractionsSection'));
const IndicationsSection = React.lazy(() => import('./components/IndicationsSection'));
const EffectsSection = React.lazy(() => import('./components/EffectsSection'));
const FormulaSection = React.lazy(() => import('./components/FormulaSection'));
const CreditsSection = React.lazy(() => import('./components/CreditsSection'));

function App() {
  return (
    <>
      <FallingPillsBackground />
      <NavigationMenu />
      <div className="noise-overlay"></div>
      <div className="scroll-container">
        
        <section id="hero" className="scroll-section">
          <HeroSection />
        </section>

        <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Cargando...</div>}>
          <section id="doctor" className="scroll-section">
            <DoctorSection />
          </section>

          <section id="ladme" className="scroll-section">
            <LadmeSection />
          </section>

          <section id="science" className="scroll-section">
            <ScienceSection />
          </section>

          <section id="interactions" className="scroll-section">
            <InteractionsSection />
          </section>

          <section id="indications" className="scroll-section">
            <IndicationsSection />
          </section>

          <section id="effects" className="scroll-section">
            <EffectsSection />
          </section>

          <section id="formula" className="scroll-section">
            <FormulaSection />
          </section>

          <section id="credits" className="scroll-section">
            <CreditsSection />
          </section>
        </Suspense>

      </div>
    </>
  );
}

export default App;
