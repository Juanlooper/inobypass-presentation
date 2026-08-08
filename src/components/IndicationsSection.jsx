import { motion } from 'framer-motion';

export default function IndicationsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200 } }
  };

  const starVariants = {
    animate: {
      rotate: [0, -90, -180, -270, -360],
      transition: { duration: 10, ease: "linear", repeat: Infinity }
    }
  };

  return (
    <motion.div 
      className="box-panel"
      initial="hidden"
      whileInView="whileInView"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Corner accents */}
      <div className="panel-corner" style={{ top: '-2px', left: '-2px', borderRight: 'none', borderBottom: 'none' }}></div>
      <div className="panel-corner" style={{ top: '-2px', right: '-2px', borderLeft: 'none', borderBottom: 'none' }}></div>
      <div className="panel-corner" style={{ bottom: '-2px', left: '-2px', borderRight: 'none', borderTop: 'none' }}></div>
      <div className="panel-corner" style={{ bottom: '-2px', right: '-2px', borderLeft: 'none', borderTop: 'none' }}></div>

      <motion.h3 variants={itemVariants} style={{ fontSize: '2.5rem', letterSpacing: '2px', color: '#1a3320', textTransform: 'uppercase', borderBottom: '4px solid #1a3320', paddingBottom: '1rem', marginBottom: '2rem', fontFamily: 'var(--font-logo)' }}>
        4. Cómo tomar InoBypass®
      </motion.h3>

      <div className="grid-1-1">
        {/* Left Column - Indications */}
        <motion.div variants={itemVariants} className="mobile-no-border" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderRight: '2px dashed rgba(26, 51, 32, 0.3)', paddingRight: '3rem' }}>
        
        <motion.div 
          whileHover={{ scale: 1.02, backgroundColor: '#a5d6a7' }} 
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ padding: '1.5rem', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
        >
          <ul style={{ fontSize: '1.6rem', lineHeight: '1.8', color: '#1a3320', paddingLeft: '2rem' }}>
            <li><strong>Dosis habitual:</strong> 1 comprimido (1.5 mg) cada 24 horas.</li>
            <li><strong>Vía de administración:</strong> Oral.</li>
            <li>Trague el comprimido entero. No lo mastique.</li>
          </ul>
        </motion.div>

        {/* Pill taking image */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <motion.img 
            src="/retro_pill_taking.png"
            alt="Cómo tomar"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{ width: '100%', maxWidth: '300px', objectFit: 'contain', border: '3px solid #1a3320', borderRadius: '16px', boxShadow: '8px 8px 0px rgba(0,0,0,0.15)', cursor: 'pointer' }}
          />
        </div>

      </motion.div>

      {/* Right Column - Dosage and Storage */}
      <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '1rem' }}>
        
        <motion.div 
          whileHover={{ scale: 1.02, backgroundColor: '#a5d6a7' }} 
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ padding: '1.5rem', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
        >
          <h4 style={{ fontSize: '1.5rem', letterSpacing: '1px', color: '#1a3320', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Características farmacocinéticas:
          </h4>
          <ul style={{ fontSize: '1.4rem', lineHeight: '1.6', color: '#1a3320', paddingLeft: '2rem' }}>
            <li><strong>Cinética de absorción:</strong> Orden cero (velocidad constante, sin fluctuaciones bruscas).</li>
            <li><strong>Vida Media plasmática:</strong> 28 horas (meseta estable con 1 dosis diaria).</li>
            <li><strong>Naturaleza Ácido-Base (pKa 8.2):</strong> Es una base débil. Se encuentra en su forma no ionizada (lipofílica) en el entorno ligeramente alcalino del intestino delgado, lo que maximiza su absorción transcelular.</li>
          </ul>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02, backgroundColor: '#a5d6a7' }} 
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ padding: '1.5rem', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s ease', marginTop: '1rem', border: '2px solid #d35400' }}
        >
          <h4 style={{ fontSize: '1.5rem', color: '#d35400', marginBottom: '0.5rem' }}>Si olvidó tomarlo:</h4>
          <p style={{ fontSize: '1.4rem', lineHeight: '1.5', color: '#1a3320' }}>
            Tómelo tan pronto lo recuerde. Si faltan menos de 12 horas para la siguiente toma, sáltese la olvidada. No tome dosis doble.
          </p>
        </motion.div>

      </motion.div>
      </div>

    </motion.div>
  );
}
