import { motion } from 'framer-motion';
import './App.css';
import HeroSection from './components/HeroSection';
import DoctorSection from './components/DoctorSection';
import ScienceSection from './components/ScienceSection';
import LadmeSection from './components/LadmeSection';
import InteractionsSection from './components/InteractionsSection';
import IndicationsSection from './components/IndicationsSection';
import EffectsSection from './components/EffectsSection';
import FormulaSection from './components/FormulaSection';
import FallingPillsBackground from './components/FallingPillsBackground';

function App() {
  return (
    <>
      <FallingPillsBackground />
      <div className="noise-overlay"></div>
      <div className="scroll-container">
        
        <section className="scroll-section">
          <HeroSection />
        </section>

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

      </div>
    </>
  );
}

export default App;
