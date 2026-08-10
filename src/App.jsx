import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import HeroSection from './components/HeroSection';
import FallingPillsBackground from './components/FallingPillsBackground';

const DoctorSection = React.lazy(() => import('./components/DoctorSection'));
const ScienceSection = React.lazy(() => import('./components/ScienceSection'));
const LadmeSection = React.lazy(() => import('./components/LadmeSection'));
const InteractionsSection = React.lazy(() => import('./components/InteractionsSection'));
const IndicationsSection = React.lazy(() => import('./components/IndicationsSection'));
const EffectsSection = React.lazy(() => import('./components/EffectsSection'));
const FormulaSection = React.lazy(() => import('./components/FormulaSection'));

function App() {
  return (
    <>
      <FallingPillsBackground />
      <div className="noise-overlay"></div>
      <div className="scroll-container">
        
        <section className="scroll-section">
          <HeroSection />
        </section>

        <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Cargando...</div>}>
          <section className="scroll-section">
            <DoctorSection />
          </section>

          <section className="scroll-section">
            <LadmeSection />
          </section>

          <section className="scroll-section">
            <ScienceSection />
          </section>

          <section className="scroll-section">
            <InteractionsSection />
          </section>

          <section className="scroll-section">
            <IndicationsSection />
          </section>

          <section className="scroll-section">
            <EffectsSection />
          </section>

          <section className="scroll-section">
            <FormulaSection />
          </section>
        </Suspense>

      </div>
    </>
  );
}

export default App;
