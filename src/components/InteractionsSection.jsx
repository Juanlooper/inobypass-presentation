import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function InteractionsSection() {
  const [activeTab, setActiveTab] = useState(null);

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

  const toggleTab = (tab) => {
    if (activeTab === tab) setActiveTab(null);
    else setActiveTab(tab);
  };

  return (
    <motion.div 
      className="box-panel"
      initial="hidden"
      whileInView="whileInView"
      viewport={{ once: false, amount: 0.1 }}
      style={{ padding: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
    >
      {/* Corner accents */}
      <div className="panel-corner" style={{ top: '-2px', left: '-2px', borderRight: 'none', borderBottom: 'none' }}></div>
      <div className="panel-corner" style={{ top: '-2px', right: '-2px', borderLeft: 'none', borderBottom: 'none' }}></div>
      <div className="panel-corner" style={{ bottom: '-2px', left: '-2px', borderRight: 'none', borderTop: 'none' }}></div>
      <div className="panel-corner" style={{ bottom: '-2px', right: '-2px', borderLeft: 'none', borderTop: 'none' }}></div>

      <motion.h3 variants={itemVariants} style={{ fontSize: '2.5rem', letterSpacing: '2px', color: '#1a3320', textTransform: 'uppercase', borderBottom: '4px solid #1a3320', paddingBottom: '1rem', marginBottom: '1rem', fontFamily: 'var(--font-logo)' }}>
        3. Uso con otros medicamentos y Embarazo
      </motion.h3>

      <motion.div variants={itemVariants} className="grid-1-1">
        
        {/* Buttons to reveal info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button className="retro-btn" onClick={() => toggleTab('interacciones')} style={{ fontSize: '1.5rem', padding: '1.5rem' }}>
            Interacciones Medicamentosas
          </button>
          <button className="retro-btn" onClick={() => toggleTab('alimentos')} style={{ fontSize: '1.5rem', padding: '1.5rem', backgroundColor: '#1a3320' }}>
            Interacción con Alimentos
          </button>
          <button className="retro-btn" onClick={() => toggleTab('embarazo')} style={{ fontSize: '1.5rem', padding: '1.5rem', backgroundColor: '#f1c40f', color: '#1a3320' }}>
            Embarazo y Lactancia
          </button>
        </div>

        {/* Info Panel / Graphic Area */}
        <div style={{ position: 'relative', minHeight: '350px' }}>
          
          {/* Default Image if no tab is active */}
          <AnimatePresence>
            {!activeTab && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#a5d6a7', borderRadius: '12px', border: '3px dashed #1a3320', padding: '2rem', textAlign: 'center', fontSize: '1.8rem', fontFamily: 'var(--font-logo)' }}
              >
                Pulse los botones para descubrir información importante.
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {activeTab === 'interacciones' && (
              <motion.div 
                key="interacciones"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#fdfbf7', border: '3px solid #1a3320', borderRadius: '12px', padding: '2rem', overflowY: 'auto' }}
              >
                <h4 style={{ fontSize: '1.6rem', color: '#d35400', marginBottom: '1rem' }}>Con otros medicamentos:</h4>
                <ul style={{ fontSize: '1.2rem', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                  <li><strong>Inhibidores P-gp:</strong> (Amiodarona, verapamilo) elevan niveles en sangre.</li>
                  <li><strong>Antibióticos:</strong> No requiere ajuste de dosis (ventaja vs digoxina estándar).</li>
                  <li><strong>Antiácidos:</strong> Tome al menos 2 horas antes o después.</li>
                </ul>
              </motion.div>
            )}

            {activeTab === 'alimentos' && (
              <motion.div 
                key="alimentos"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#fdfbf7', border: '3px solid #1a3320', borderRadius: '12px', padding: '2rem', overflowY: 'auto' }}
              >
                 <h4 style={{ fontSize: '1.6rem', color: '#d35400', marginBottom: '1rem' }}>Arginina y dietas hiperproteicas:</h4>
                 <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
                   Gracias a su blindaje estérico, la farmacocinética de InoBypass® es estable frente a variaciones dietéticas extremas de proteínas o arginina.
                 </p>
              </motion.div>
            )}

            {activeTab === 'embarazo' && (
              <motion.div 
                key="embarazo"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#fdfbf7', border: '3px solid #1a3320', borderRadius: '12px', padding: '2rem', display: 'flex', gap: '2rem' }}
              >
                <img src="/retro_pregnant.png" alt="Embarazo" style={{ width: '150px', objectFit: 'contain', borderRadius: '8px' }} />
                <div style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
                  <p><strong>Embarazo:</strong> Categoría C. No se recomienda a menos que sea estrictamente necesario.</p>
                  <p style={{ marginTop: '1rem' }}><strong>Lactancia:</strong> Se excreta en cantidades mínimas. Evaluar interrupción del tratamiento o lactancia.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </motion.div>
  );
}
