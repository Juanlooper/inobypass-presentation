import { motion } from 'framer-motion';

export default function FallingPillsBackground() {
  const pills = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}vw`,
    delay: Math.random() * -20, // Negative delay so they are already on screen
    duration: 15 + Math.random() * 20, // Slow fall
    size: 30 + Math.random() * 40,
    rotate: Math.random() * 360,
    rotateDir: Math.random() > 0.5 ? 1 : -1
  }));

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden',
      opacity: 0.3 // Muy sutil
    }}>
      {pills.map((pill) => (
        <motion.div
          key={pill.id}
          initial={{ y: -100, x: pill.left, rotate: pill.rotate }}
          animate={{ 
            y: '110vh', 
            rotate: pill.rotate + (360 * pill.rotateDir) 
          }}
          transition={{
            duration: pill.duration,
            repeat: Infinity,
            delay: pill.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            width: `${pill.size}px`,
            height: `${pill.size}px`,
            borderRadius: '50%',
            background: 'linear-gradient(to bottom, transparent 47%, #1a3320 47%, #1a3320 53%, transparent 53%), #fdfbf7',
            border: '2px solid #1a3320',
            boxShadow: '3px 3px 0px rgba(26,51,32,0.2)'
          }}
        />
      ))}
    </div>
  );
}
