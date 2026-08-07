import { motion } from 'framer-motion';

export default function DoctorSection() {
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
      viewport={{ once: false, amount: 0.2 }}
      style={{ padding: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
    >
      {/* Corner accents */}
      <div className="panel-corner" style={{ top: '-2px', left: '-2px', borderRight: 'none', borderBottom: 'none' }}></div>
      <div className="panel-corner" style={{ top: '-2px', right: '-2px', borderLeft: 'none', borderBottom: 'none' }}></div>
      <div className="panel-corner" style={{ bottom: '-2px', left: '-2px', borderRight: 'none', borderTop: 'none' }}></div>
      <div className="panel-corner" style={{ bottom: '-2px', right: '-2px', borderLeft: 'none', borderTop: 'none' }}></div>

      <motion.h3 variants={itemVariants} style={{ fontSize: '2.5rem', letterSpacing: '2px', color: '#1a3320', textTransform: 'uppercase', borderBottom: '4px solid #1a3320', paddingBottom: '1rem', marginBottom: '1rem', fontFamily: 'var(--font-logo)' }}>
        1. Qué es InoBypass® y para qué se utiliza
      </motion.h3>

      <motion.div variants={itemVariants} className="grid-2-3">
        
        {/* Doctor Graphic */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
           <motion.img 
             src="/retro_doctor.png"
             alt="Doctor Retro"
             whileHover={{ scale: 1.05 }}
             style={{ width: '100%', maxWidth: '300px', objectFit: 'contain', border: '3px solid #1a3320', borderRadius: '16px', boxShadow: '8px 8px 0px rgba(0,0,0,0.15)', cursor: 'pointer' }}
           />
        </div>

        {/* Info text */}
        <div style={{ fontSize: '1.6rem', lineHeight: '1.8', color: '#1a3320' }}>
          <p style={{ marginBottom: '2rem' }}>
            InoBypass® contiene el principio activo <strong>Cripto-Inotropina</strong>, un agente inotrópico positivo de última generación. 
            Aumenta la fuerza de contracción del músculo cardíaco mediante la inhibición selectiva de la bomba Na+/K+-ATPasa.
          </p>
          <div style={{ padding: '1.5rem', backgroundColor: '#a5d6a7', borderRadius: '8px', border: '2px dashed #1a3320' }}>
            <strong>Este medicamento está indicado para:</strong>
            <ul style={{ paddingLeft: '2rem', marginTop: '1rem' }}>
              <li>El tratamiento de la insuficiencia cardíaca congestiva crónica.</li>
              <li>El control de la frecuencia ventricular en pacientes con fibrilación auricular.</li>
            </ul>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}
