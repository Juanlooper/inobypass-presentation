import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ScienceSection() {
  const [showWarnings, setShowWarnings] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200 } }
  };

  return (
    <motion.div 
      className="box-panel"
      initial="hidden"
      whileInView="whileInView"
      viewport={{ once: false, amount: 0.1 }}
      style={{ padding: '5rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}
    >
      {/* Corner accents */}
      <div className="panel-corner" style={{ top: '-2px', left: '-2px', borderRight: 'none', borderBottom: 'none' }}></div>
      <div className="panel-corner" style={{ top: '-2px', right: '-2px', borderLeft: 'none', borderBottom: 'none' }}></div>
      <div className="panel-corner" style={{ bottom: '-2px', left: '-2px', borderRight: 'none', borderTop: 'none' }}></div>
      <div className="panel-corner" style={{ bottom: '-2px', right: '-2px', borderLeft: 'none', borderTop: 'none' }}></div>

      <motion.h3 variants={itemVariants} style={{ fontSize: '2.5rem', letterSpacing: '2px', color: '#1a3320', textTransform: 'uppercase', borderBottom: '4px solid #1a3320', paddingBottom: '1rem', marginBottom: '1rem', fontFamily: 'var(--font-logo)' }}>
        2. Qué necesita saber antes de empezar
      </motion.h3>

      <motion.div variants={itemVariants} className="grid-1-1">
        
        {/* Shield graphic */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
           <motion.img 
             src="/retro_shield.png"
             alt="Blindaje Estérico"
             animate={{ y: [-10, 10, -10] }}
             transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
             style={{ width: '100%', maxWidth: '400px', objectFit: 'contain', border: '3px solid #1a3320', borderRadius: '16px', boxShadow: '8px 8px 0px rgba(0,0,0,0.15)' }}
           />
        </div>
        
        {/* Science Text */}
        <div style={{ fontSize: '1.6rem', lineHeight: '1.8', color: '#1a3320' }}>
          <h4 style={{ fontSize: '1.8rem', marginBottom: '1rem', borderBottom: '2px dashed #d35400', paddingBottom: '0.5rem', display: 'inline-block' }}>Propiedades Biofarmacéuticas Exclusivas</h4>
          <p style={{ marginBottom: '1.5rem' }}>
            La digoxina clásica experimenta inactivación por la bacteria <em>Eggerthella lenta</em>. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            InoBypass® ha sido diseñado con un <strong>blindaje o impedimento estérico molecular</strong> que lo hace completamente invisible para esta bacteria.
          </p>
          <ul style={{ paddingLeft: '2rem', listStyleType: 'disc', fontWeight: 'bold' }}>
            <li>Garantiza biodisponibilidad constante del 98%.</li>
            <li>Seguro durante el uso de antibióticos.</li>
          </ul>
        </div>
      </motion.div>

      {/* Interactive Button */}
      <motion.div variants={itemVariants} style={{ marginTop: '2rem' }}>
        <button className="retro-btn" onClick={() => setShowWarnings(!showWarnings)}>
          {showWarnings ? '▲ Ocultar Advertencias ▲' : '▼ ¡Descubra si InoBypass es para usted! ▼'}
        </button>

        <AnimatePresence>
          {showWarnings && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{ overflow: 'hidden' }}
            >
              <div className="interactive-panel">
                <h4 style={{ fontSize: '2rem', color: '#d35400', marginBottom: '1rem', fontFamily: 'var(--font-logo)' }}>Advertencias y Precauciones</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', fontSize: '1.4rem', lineHeight: '1.6' }}>
                  <div>
                    <strong>No tome InoBypass si:</strong>
                    <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
                      <li>Es alérgico a la Cripto-Inotropina.</li>
                      <li>Padece miocardiopatía hipertrófica.</li>
                      <li>Presenta bloqueo AV de 2do o 3er grado sin marcapasos.</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Consulte a su médico si:</strong>
                    <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
                      <li>Padece insuficiencia renal severa.</li>
                      <li>Presenta trastornos electrolíticos severos (ej. hipopotasemia).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    </motion.div>
  );
}
