import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'hero', label: 'Inicio' },
    { id: 'doctor', label: 'Presentación Médica' },
    { id: 'ladme', label: 'Proceso LADME' },
    { id: 'science', label: 'Evidencia Científica' },
    { id: 'interactions', label: 'Interacciones' },
    { id: 'indications', label: 'Indicaciones' },
    { id: 'effects', label: 'Efectos Secundarios' },
    { id: 'formula', label: 'Fórmula Magistral' },
    { id: 'credits', label: 'Información y Fabricación' }
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <button 
        className="retro-nav-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menú"
      >
        ☰ Menú
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="nav-overlay-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              className="nav-panel box-panel"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            >
              <button 
                className="close-nav-btn"
                onClick={() => setIsOpen(false)}
              >
                ✕ Cerrar
              </button>
              
              <h2 className="title-retro" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Índice</h2>
              
              <ul className="nav-links">
                {sections.map((section, index) => (
                  <motion.li 
                    key={section.id}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <button 
                      onClick={() => handleScroll(section.id)}
                      className="nav-link-btn"
                    >
                      {section.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
