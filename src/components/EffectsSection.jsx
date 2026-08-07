import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function EffectsSection() {
  const [showOverdose, setShowOverdose] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200 } }
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
        5. Posibles Efectos Adversos
      </motion.h3>

      <motion.div variants={itemVariants} className="grid-2-1">
        
        {/* Text */}
        <div style={{ fontSize: '1.4rem', lineHeight: '1.6', color: '#1a3320' }}>
          <p style={{ marginBottom: '1rem' }}>Al igual que todos los medicamentos, puede producir efectos adversos:</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <motion.div whileHover={{ scale: 1.02, backgroundColor: '#a5d6a7' }} style={{ padding: '1rem', borderLeft: '4px solid #f1c40f', borderRadius: '4px' }}>
              <strong>Frecuentes (1 a 10 de cada 100):</strong>
              <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Dolor de cabeza (cefalea).</li>
                <li>Trastornos gastrointestinales leves.</li>
                <li>Mareos al inicio de la terapia.</li>
              </ul>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02, backgroundColor: '#a5d6a7' }} style={{ padding: '1rem', borderLeft: '4px solid #d35400', borderRadius: '4px' }}>
              <strong>Poco frecuentes (1 a 10 de cada 1,000):</strong>
              <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Disminución de la frecuencia cardíaca (bradicardia).</li>
                <li>Arritmias menores asociadas a acumulación tisular.</li>
              </ul>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02, backgroundColor: '#a5d6a7' }} style={{ padding: '1rem', borderLeft: '4px solid #c0392b', borderRadius: '4px' }}>
              <strong>Raras (menos de 1 de cada 1,000):</strong>
              <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Reacciones de hipersensibilidad cutánea.</li>
                <li><strong>Xantopsia:</strong> Alteraciones en la percepción del color (visión amarillenta). <em>Signo de advertencia de toxicidad.</em></li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Warning Graphic */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.img 
            src="/retro_eye_warning.png"
            alt="Advertencia de Xantopsia"
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', maxWidth: '200px', objectFit: 'contain', borderRadius: '50%', boxShadow: '0px 0px 15px rgba(211,84,0,0.5)', cursor: 'pointer' }}
          />
        </div>

      </motion.div>

      <motion.div variants={itemVariants} style={{ marginTop: '2rem' }}>
        <button 
          className="retro-btn" 
          onClick={() => setShowOverdose(!showOverdose)}
          style={{ backgroundColor: '#c0392b', color: '#fdfbf7', borderColor: '#c0392b' }}
        >
          {showOverdose ? 'Cerrar Protocolo de Emergencia' : 'Ver Protocolo de Sobredosis'}
        </button>

        <AnimatePresence>
          {showOverdose && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{ overflow: 'hidden' }}
            >
              <div className="interactive-panel" style={{ backgroundColor: '#fdfbf7', borderColor: '#c0392b' }}>
                <h4 style={{ fontSize: '2rem', color: '#c0392b', marginBottom: '1rem', fontFamily: 'var(--font-logo)' }}>En caso de Sobredosis:</h4>
                <p style={{ fontSize: '1.4rem', lineHeight: '1.6', color: '#1a3320', marginBottom: '1rem' }}>
                  Puede provocar toxicidad cardíaca severa (fatiga extrema, bradicardia severa, confusión, visión amarilla, arritmias).
                </p>
                <div style={{ fontSize: '1.4rem', lineHeight: '1.6', color: '#1a3320', borderTop: '1px solid #c0392b', paddingTop: '1rem' }}>
                  <strong>Tratamiento Médico:</strong> Interrumpir administración. Lavado gástrico, carbón activado, monitoreo ECG, corrección de potasio y soporte hemodinámico.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    </motion.div>
  );
}
