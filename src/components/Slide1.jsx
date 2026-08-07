import { motion } from 'framer-motion';

export default function Slide1() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  const starVariants = {
    animate: {
      rotate: [0, 90, 180, 270, 360],
      scale: [1, 1.2, 1],
      transition: {
        duration: 8,
        ease: "linear",
        repeat: Infinity,
      }
    }
  };

  return (
    <motion.div 
      className="slide-content" 
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2rem' }}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants} style={{ position: 'relative' }}>
        <motion.div 
          variants={starVariants} 
          animate="animate"
          className="atomic-star" 
          style={{ top: '-40px', left: '-60px', fontSize: '4rem' }}
        >
          ✦
        </motion.div>
        
        <h1 className="title-retro" style={{ fontSize: '10rem', color: '#1a3320' }}>InoBypass</h1>
        <h2 className="subtitle-retro" style={{ marginTop: '-1rem' }}>Cripto-Inotropina 1.5 mg</h2>
        
        <motion.div 
          variants={starVariants} 
          animate="animate"
          className="atomic-star" 
          style={{ bottom: '-20px', right: '-80px', fontSize: '3rem' }}
        >
          ✦
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="badge" style={{ marginTop: '2rem' }}>
        ¡LA MARAVILLA BIOFARMACÉUTICA DE 1960!
      </motion.div>
    </motion.div>
  );
}
