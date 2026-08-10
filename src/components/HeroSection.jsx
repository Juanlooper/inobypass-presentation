import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring", bounce: 0.4 }
    }
  };

  const starVariants = {
    animate: {
      rotate: [0, 90, 180, 270, 360],
      scale: [1, 1.2, 1],
      transition: { duration: 8, ease: "linear", repeat: Infinity }
    }
  };

  return (
    <motion.div 
      className="box-panel grid-1-1"
      initial="hidden"
      whileInView="whileInView"
      viewport={{ once: false, amount: 0.3 }}
      style={{ minHeight: '600px' }}
    >
      {/* Corner accents */}
      <div className="panel-corner" style={{ top: '-2px', left: '-2px', borderRight: 'none', borderBottom: 'none' }}></div>
      <div className="panel-corner" style={{ top: '-2px', right: '-2px', borderLeft: 'none', borderBottom: 'none' }}></div>
      <div className="panel-corner" style={{ bottom: '-2px', left: '-2px', borderRight: 'none', borderTop: 'none' }}></div>
      <div className="panel-corner" style={{ bottom: '-2px', right: '-2px', borderLeft: 'none', borderTop: 'none' }}></div>

      {/* Top Section - Title */}
      <div style={{ gridColumn: '1 / -1', textAlign: 'center', position: 'relative', paddingTop: '2rem' }}>
        <motion.div variants={starVariants} animate="animate" className="atomic-star" style={{ top: '20px', left: '15%', fontSize: '3rem' }}>✦</motion.div>
        
        <motion.img 
          src="/LOGO.png" 
          alt="InoBypass Logo"
          style={{ width: '100%', maxWidth: '600px', objectFit: 'contain', margin: '0 auto' }}
        />
        <h2 className="subtitle-retro" style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Cripto-Inotropina <span style={{ marginLeft: '1rem', color: '#d35400' }}>1.5 mg</span></h2>
        
        <motion.div variants={starVariants} animate="animate" className="atomic-star" style={{ bottom: '20px', right: '15%', fontSize: '3rem' }}>✦</motion.div>

        {/* New decorations to fill empty space */}
        <motion.div variants={starVariants} animate="animate" className="atomic-star" style={{ top: '80px', left: '5%', fontSize: '2rem', color: '#d35400' }}>✦</motion.div>
        <motion.div variants={starVariants} animate="animate" className="atomic-star" style={{ top: '100px', right: '8%', fontSize: '1.5rem', color: '#f1c40f' }}>✦</motion.div>
        <motion.div variants={starVariants} animate="animate" className="atomic-star" style={{ bottom: '0', left: '25%', fontSize: '2.5rem', color: '#1a3320', opacity: 0.3 }}>✦</motion.div>
      </div>

      {/* Badge absolute positioned top right */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], rotate: [-5, -3, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="badge" 
        style={{ position: 'absolute', top: '2rem', right: '2rem', maxWidth: '300px', textAlign: 'center', fontSize: '1.7rem', padding: '1.2rem 1.5rem' }}
      >
        ¡LA MARAVILLA BIOFARMACÉUTICA!
      </motion.div>

      {/* Bottom Left - Heart Graphic */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '100%', height: '100%', minHeight: '350px' }}>
        {/* Background decorative circle for the video to make it less empty */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', width: '80%', paddingTop: '80%', backgroundColor: '#f1c40f', borderRadius: '50%', zIndex: 0, opacity: 0.3 }} 
        />
        <motion.video 
          autoPlay
          loop
          muted
          playsInline
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain', backgroundColor: 'transparent', mixBlendMode: 'darken', zIndex: 1 }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </motion.video>
      </div>

      {/* Bottom Right - Banners */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', paddingBottom: '2rem', gap: '3rem' }}>
        
        {/* Orange Banner */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          style={{ 
            backgroundColor: '#d35400', 
            color: '#fdfbf7', 
            padding: '1.5rem 3rem',
            transform: 'rotate(-3deg)',
            boxShadow: '8px 8px 0px rgba(0,0,0,0.2)',
            fontFamily: 'var(--font-logo)',
            fontSize: '2.5rem',
            textAlign: 'center',
            width: '120%',
            marginRight: '-10%' /* Make it break out of the box slightly like the original */
          }}
        >
          Eficacia constante, <br/>sin interferencias de su flora.
        </motion.div>

        {/* 30 Comprimidos Banner */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2rem', width: '100%' }}>
          <div style={{ flex: 1, textAlign: 'center', fontSize: '1.6rem', fontWeight: '600' }}>
            Comprimidos matriciales<br/>de liberación modificada.
          </div>
          <div style={{ 
            backgroundColor: '#1a3320', 
            color: '#fdfbf7', 
            padding: '2rem 3rem 1rem 3rem',
            borderTopLeftRadius: '100px',
            textAlign: 'center',
            minWidth: '200px'
          }}>
            <div style={{ fontSize: '4rem', fontWeight: 'bold', lineHeight: '1' }}>30</div>
            <div style={{ fontSize: '1.2rem', letterSpacing: '2px', fontWeight: 'bold' }}>COMPRIMIDOS</div>
            <div style={{ fontSize: '1rem', marginTop: '0.5rem', fontWeight: '300' }}>Tratamiento para<br/>un mes.</div>
          </div>
        </div>

      </div>

    </motion.div>
  );
}
