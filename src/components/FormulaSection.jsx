import { motion } from 'framer-motion';

export default function FormulaSection() {
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

      <motion.h3 variants={itemVariants} style={{ fontSize: '2.5rem', letterSpacing: '2px', color: '#1a3320', textTransform: 'uppercase', borderBottom: '4px solid #1a3320', paddingBottom: '1rem', marginBottom: '1rem', fontFamily: 'var(--font-logo)' }}>
        6. Conservación y Contenido del Envase
      </motion.h3>

      <motion.div variants={itemVariants} className="grid-1-1" style={{ position: 'relative' }}>
         
         <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
           <motion.div 
             whileHover={{ scale: 1.02, backgroundColor: '#a5d6a7' }} 
             transition={{ type: 'spring', stiffness: 300 }}
             style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#1a3320', padding: '2rem', borderRadius: '12px', cursor: 'pointer', transition: 'background-color 0.3s ease', border: '2px dashed #1a3320' }}
           >
             <h4 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#d35400' }}>Conservación:</h4>
             <ul style={{ paddingLeft: '2rem' }}>
               <li>Mantener fuera de la vista y del alcance de los niños.</li>
               <li>Consérvese a no más de 30°C y en lugar seco.</li>
               <li>Mantenga el blíster protegido de la luz y la humedad.</li>
               <li>No utilice después de la fecha "CAD".</li>
               <li>Deposite envases que no necesite en el Punto SIGRE.</li>
             </ul>
           </motion.div>
         </div>

         <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
           <motion.div 
             whileHover={{ scale: 1.02, backgroundColor: '#a5d6a7' }} 
             transition={{ type: 'spring', stiffness: 300 }}
             style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#1a3320', padding: '2rem', borderRadius: '12px', cursor: 'pointer', transition: 'background-color 0.3s ease', border: '2px dashed #1a3320' }}
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
             <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
               Presentación: Blíster con 30 comprimidos redondos de liberación modificada. Tratamiento completo para un mes.
             </p>
           </motion.div>
         </div>

      </motion.div>

      <motion.div variants={itemVariants} style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '2px solid #1a3320', textAlign: 'center', fontFamily: 'var(--font-logo)' }}>
        <p style={{ fontSize: '1.6rem', color: '#1a3320' }}>Este prospecto ha sido aprobado en Julio de 1960.</p>
        <p style={{ fontSize: '2rem', color: '#d35400', marginTop: '1rem' }}>Laboratorios InoBypass S.A.</p>
        <p style={{ fontSize: '1.2rem', letterSpacing: '2px', color: '#1a3320', marginTop: '0.5rem', textTransform: 'uppercase' }}>Innovación al servicio del sistema cardiometabólico.</p>
      </motion.div>

    </motion.div>
  );
}
