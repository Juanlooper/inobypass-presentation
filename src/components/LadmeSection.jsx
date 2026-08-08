import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function LadmeSection() {
  const [activeTab, setActiveTab] = useState('L');

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

  const tabs = [
    { id: 'L', label: 'Liberación (L)' },
    { id: 'A', label: 'Absorción (A)' },
    { id: 'D', label: 'Distribución (D)' },
    { id: 'M', label: 'Metabolismo (M)' },
    { id: 'E', label: 'Excreción (E)' }
  ];

  const content = {
    'L': {
      title: 'Liberación Controlada',
      text: 'El polímero matricial protege al fármaco en el estómago y permite una liberación lenta, prolongada y sostenida a lo largo del intestino delgado.',
      img: '/ladme_l.png'
    },
    'A': {
      title: 'Absorción Predecible',
      text: 'Se absorbe por difusión pasiva a través de los enterocitos. Al ser completamente inmune a la degradación por las bacterias intestinales, su biodisponibilidad oral es siempre del 98%, manteniéndose estable y predecible. Si el paciente toma antibióticos que causan disbiosis, la absorción del InoBypass® no se altera, evitando así cualquier riesgo de toxicidad aguda.',
      img: '/ladme_a.png'
    },
    'D': {
      title: 'Distribución Cardíaca',
      text: 'Posee alta afinidad por el tejido del músculo cardíaco (miocardio) y viaja unida a la albúmina plasmática en un 60%.',
      img: '/ladme_d.png'
    },
    'M': {
      title: 'Metabolismo Hepático Exclusivo',
      text: 'Su biotransformación es exclusivamente hepática (Fase I y Fase II mediante enzimas CYP), transformándose en compuestos más hidrofílicos. No sufre ningún tipo de metabolismo bacteriano presistémico en el intestino.',
      img: '/ladme_m.png'
    },
    'E': {
      title: 'Excreción Renal',
      text: 'Se elimina principalmente por vía renal (en la orina).',
      img: '/ladme_e.png'
    }
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

      <motion.h3 variants={itemVariants} style={{ fontSize: '2.5rem', letterSpacing: '2px', color: '#1a3320', textTransform: 'uppercase', borderBottom: '4px solid #1a3320', paddingBottom: '1rem', fontFamily: 'var(--font-logo)' }}>
        Perfil Farmacocinético Exclusivo (LADME)
      </motion.h3>

      <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '1rem 2rem',
              fontFamily: 'var(--font-body)',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              border: '3px solid #1a3320',
              borderRadius: '8px',
              backgroundColor: activeTab === tab.id ? '#d35400' : '#fdfbf7',
              color: activeTab === tab.id ? '#fdfbf7' : '#1a3320',
              cursor: 'pointer',
              boxShadow: activeTab === tab.id ? 'inset 2px 2px 5px rgba(0,0,0,0.3)' : '4px 4px 0px rgba(0,0,0,0.1)',
              transition: 'all 0.2s',
              transform: activeTab === tab.id ? 'translate(2px, 2px)' : 'none'
            }}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} style={{ minHeight: '400px', display: 'flex', alignItems: 'center' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="grid-1-1"
            style={{ width: '100%', gap: '3rem', alignItems: 'center' }}
          >
            {/* Image side */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{ 
                  width: '100%', 
                  maxWidth: '350px',
                  minHeight: '250px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '3px dashed #1a3320', 
                  borderRadius: '16px', 
                  backgroundColor: '#e2d6c1',
                  color: '#1a3320',
                  fontSize: '1.4rem',
                  textAlign: 'center',
                  padding: '2rem'
                }}
              >
                [Imagen de {content[activeTab].title} a colocar en el futuro]
              </motion.div>
            </div>

            {/* Text side */}
            <div style={{ fontSize: '1.6rem', lineHeight: '1.8', color: '#1a3320' }}>
              <h4 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#d35400', fontFamily: 'var(--font-logo)' }}>
                {content[activeTab].title}
              </h4>
              <p>
                {content[activeTab].text}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

    </motion.div>
  );
}
