import { motion } from 'framer-motion';
import { ShieldCheck, Bug } from 'lucide-react';

export default function Slide3() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200 } }
  };

  return (
    <motion.div 
      style={{ width: '100%', maxWidth: '1100px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h2 variants={itemVariants} className="title-retro" style={{ fontSize: '4.5rem', textAlign: 'center' }}>
        Propiedad Biofarmacéutica Exclusiva
      </motion.h2>

      <motion.div variants={itemVariants} className="card" style={{ width: '100%', maxWidth: '1000px', padding: '4rem', display: 'flex', gap: '3rem', alignItems: 'center' }}>
        
        <div style={{ flex: '1' }}>
          <p style={{ fontSize: '1.6rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Molécula con <strong>blindaje estérico</strong> diseñada para evadir la inactivación mediada por el <em>operón cgr2</em> de la bacteria anaerobia <span style={{ fontFamily: 'var(--font-logo)', fontSize: '2.5rem', color: '#1a3320' }}>Eggerthella lenta</span>.
          </p>
          <p style={{ fontSize: '1.6rem', lineHeight: '1.8' }}>
            Esto asegura una <strong>biodisponibilidad predecible y segura</strong>, incluso ante el uso concomitante de antibióticos de amplio espectro.
          </p>
        </div>

        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', borderLeft: '3px dashed #1a3320', paddingLeft: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <motion.div 
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ color: '#d35400' }}
            >
              <Bug size={80} />
            </motion.div>
            
            <div style={{ fontSize: '3rem' }}>❌</div>
            
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ color: '#1a3320' }}
            >
              <ShieldCheck size={100} />
            </motion.div>
          </div>
          <p style={{ fontFamily: 'var(--font-logo)', fontSize: '2rem', marginTop: '1rem', textAlign: 'center' }}>
            ¡Evasión Garantizada!
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
