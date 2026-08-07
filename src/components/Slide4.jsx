import { motion } from 'framer-motion';
import { FlaskConical } from 'lucide-react';

export default function Slide4() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200 } }
  };

  return (
    <motion.div 
      style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '3rem' }}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h2 variants={itemVariants} className="title-retro" style={{ fontSize: '5rem', textAlign: 'center' }}>
        Fórmula
      </motion.h2>

      <motion.div variants={itemVariants} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#1a3320', borderBottom: '2px solid #1a3320', paddingBottom: '1rem' }}>
          <FlaskConical size={40} />
          <h3 className="subtitle-retro" style={{ fontSize: '2.5rem' }}>Excipientes</h3>
        </div>

        <div style={{ fontSize: '1.6rem', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1rem' }}>Cada comprimido contiene:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px dashed rgba(26,51,32,0.3)' }}>
              <strong>Cripto-Inotropina:</strong> 1.5 mg
            </li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px dashed rgba(26,51,32,0.3)' }}>
              Hidroxipropilmetilcelulosa (HPMC)
            </li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px dashed rgba(26,51,32,0.3)' }}>
              Celulosa microcristalina
            </li>
            <li style={{ padding: '0.5rem 0' }}>
              Estearato de magnesio c.b.p. 1 comprimido.
            </li>
          </ul>
        </div>

        <div style={{ 
          marginTop: '1rem',
          padding: '1rem', 
          backgroundColor: '#a5d6a7', 
          border: '2px solid #1a3320',
          borderRadius: '4px',
          textAlign: 'center',
          fontFamily: 'var(--font-logo)',
          fontSize: '2rem'
        }}>
          Comprimidos matriciales de liberación modificada.
        </div>
      </motion.div>
    </motion.div>
  );
}
