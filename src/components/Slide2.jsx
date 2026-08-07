import { motion } from 'framer-motion';
import { Pill, Activity } from 'lucide-react';

export default function Slide2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      style={{ width: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column', gap: '3rem' }}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h2 variants={cardVariants} className="title-retro" style={{ fontSize: '5rem', textAlign: 'center' }}>
        Indicación y Dosis
      </motion.h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        <motion.div variants={cardVariants} className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: '#d35400' }}>
            <Activity size={48} />
            <h3 className="subtitle-retro">Indicación Terapéutica</h3>
          </div>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
            Inotrópico positivo indicado para la insuficiencia cardíaca congestiva.
          </p>
          <div style={{ 
            marginTop: '2rem', 
            padding: '1.5rem', 
            backgroundColor: '#e67e22', 
            color: '#fdfbf7', 
            borderRadius: '8px',
            transform: 'rotate(2deg)',
            boxShadow: '4px 4px 0px rgba(0,0,0,0.2)'
          }}>
            <h4 style={{ fontFamily: 'var(--font-logo)', fontSize: '2.5rem', textAlign: 'center', margin: 0 }}>
              Eficacia constante, sin interferencias de su flora.
            </h4>
          </div>
        </motion.div>

        <motion.div variants={cardVariants} className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: '#1a3320' }}>
            <Pill size={48} />
            <h3 className="subtitle-retro">Dosis y Administración</h3>
          </div>
          <div style={{ fontSize: '1.5rem', lineHeight: '1.8' }}>
            <p><strong>Vía de administración:</strong> Oral.</p>
            <p><strong>Dosis recomendada:</strong></p>
            <p style={{ fontSize: '1.8rem', fontWeight: '600', paddingLeft: '1.5rem', borderLeft: '4px solid #1a3320', margin: '1rem 0' }}>
              La que el médico señale.<br/>
              <span style={{ fontSize: '1.4rem', fontWeight: '400' }}>(Habitualmente 1 comprimido cada 24 horas)</span>
            </p>
            <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
              Tratamiento en presentación de 30 comprimidos para un mes.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
