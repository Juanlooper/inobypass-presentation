import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function FormulaSection() {
  const [activeImage, setActiveImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200 } }
  };

  const starVariants = {
    animate: {
      rotate: [0, 90, 180, 270, 360],
      transition: { duration: 12, ease: "linear", repeat: Infinity }
    }
  };

  return (
    <motion.div 
      className="box-panel"
      initial="hidden"
      whileInView="whileInView"
      viewport={{ once: false, amount: 0.3 }}
      style={{ padding: '4rem', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}
    >
      {/* Corner accents */}
      <div className="panel-corner" style={{ top: '-2px', left: '-2px', borderRight: 'none', borderBottom: 'none' }}></div>
      <div className="panel-corner" style={{ top: '-2px', right: '-2px', borderLeft: 'none', borderBottom: 'none' }}></div>
      <div className="panel-corner" style={{ bottom: '-2px', left: '-2px', borderRight: 'none', borderTop: 'none' }}></div>
      <div className="panel-corner" style={{ bottom: '-2px', right: '-2px', borderLeft: 'none', borderTop: 'none' }}></div>

      <motion.h3 variants={itemVariants} style={{ fontSize: '2.5rem', letterSpacing: '2px', color: '#1a3320', textTransform: 'uppercase', borderBottom: '4px solid #1a3320', paddingBottom: '1rem', marginBottom: '2rem', fontFamily: 'var(--font-logo)' }}>
        6. Conservación y Contenido del Envase
      </motion.h3>

      {/* Label images are now triggered by buttons */}

      <motion.div variants={itemVariants} className="grid-1-1" style={{ position: 'relative' }}>
         
         <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
           <motion.div 
             whileHover={{ scale: 1.02, backgroundColor: '#a5d6a7' }} 
             transition={{ type: 'spring', stiffness: 300 }}
             style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#1a3320', padding: '2rem', borderRadius: '12px', border: '2px dashed #1a3320', display: 'flex', flexDirection: 'column' }}
           >
             <h4 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#d35400' }}>Conservación:</h4>
             <ul style={{ paddingLeft: '2rem', flex: 1 }}>
               <li>Mantener fuera de la vista y del alcance de los niños.</li>
               <li>Consérvese a no más de 30°C y en lugar seco.</li>
               <li>Mantenga el blíster protegido de la luz y la humedad.</li>
               <li>No utilice después de la fecha "caducididad".</li>
               <li>Deposite envases que no necesite en el Punto SIGRE.</li>
             </ul>
             <button className="retro-btn" onClick={() => setActiveImage('/conservacion_1.png')} style={{ marginTop: '2rem', alignSelf: 'center', padding: '0.8rem 1.5rem', fontSize: '1.2rem' }}>
               Ver Etiqueta de Conservación
             </button>
           </motion.div>
         </div>

         <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
           <motion.div 
             whileHover={{ scale: 1.02, backgroundColor: '#a5d6a7' }} 
             transition={{ type: 'spring', stiffness: 300 }}
             style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#1a3320', padding: '2rem', borderRadius: '12px', border: '2px dashed #1a3320', display: 'flex', flexDirection: 'column' }}
           >
             <h4 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#d35400' }}>Composición:</h4>
             <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
               <li style={{ padding: '0.2rem 0', display: 'flex', justifyContent: 'space-between', borderBottom: '1px dotted rgba(26,51,32,0.5)' }}>
                 <span><strong>Cripto-Inotropina</strong></span> <span>1.5 mg</span>
               </li>
               <li style={{ padding: '0.2rem 0', display: 'flex', justifyContent: 'space-between', borderBottom: '1px dotted rgba(26,51,32,0.5)' }}>
                 <span>Hidroxipropilmetilcelulosa (HPMC)</span>
               </li>
               <li style={{ padding: '0.2rem 0', display: 'flex', justifyContent: 'space-between', borderBottom: '1px dotted rgba(26,51,32,0.5)' }}>
                 <span>Celulosa microcristalina</span>
               </li>
               <li style={{ padding: '0.2rem 0' }}>Estearato de magnesio c.b.p.</li>
             </ul>
             <p style={{ marginTop: '1rem', fontStyle: 'italic', flex: 1 }}>
               Presentación: Blíster con 30 comprimidos redondos de liberación modificada. Tratamiento completo para un mes.
             </p>
             <button className="retro-btn" onClick={() => setActiveImage('/conservacion_2.png')} style={{ marginTop: '2rem', alignSelf: 'center', padding: '0.8rem 1.5rem', fontSize: '1.2rem' }}>
               Ver Etiqueta de Composición
             </button>
           </motion.div>
         </div>

      </motion.div>

      <motion.div variants={itemVariants} style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '2px solid #1a3320', textAlign: 'center', fontFamily: 'var(--font-logo)' }}>
        <p style={{ fontSize: '1.6rem', color: '#1a3320' }}>Este prospecto ha sido aprobado en Julio de 1960.</p>
        <p style={{ fontSize: '2rem', color: '#d35400', marginTop: '1rem' }}>Laboratorios InoBypass S.A.</p>
        <p style={{ fontSize: '1.2rem', letterSpacing: '2px', color: '#1a3320', marginTop: '0.5rem', textTransform: 'uppercase' }}>Innovación al servicio del sistema cardiometabólico.</p>
      </motion.div>

      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem', cursor: 'pointer' }}
          >
            <motion.img 
              src={activeImage} 
              alt="Etiqueta" 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain', cursor: 'default', filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.5))' }}
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              onClick={() => setActiveImage(null)} 
              style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'transparent', border: 'none', color: '#e2d6c1', fontSize: '3rem', cursor: 'pointer' }}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
