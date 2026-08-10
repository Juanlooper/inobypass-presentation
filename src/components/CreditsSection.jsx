import React from 'react';
import { motion } from 'framer-motion';

export default function CreditsSection() {
  return (
    <motion.div 
      className="leaflet-credits"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="leaflet-border">
        <h2 className="leaflet-title">INFORMACIÓN PARA EL PACIENTE Y FABRICACIÓN</h2>
        <hr className="leaflet-divider" />
        
        <p className="leaflet-text">
          <strong>INOBYPASS (CRIPTO-INOTROPINA) 1.5 mg</strong> comprimidos matriciales de liberación modificada.
        </p>
        
        <p className="leaflet-text">
          La investigación, formulación y ensayos clínicos de este preparado han sido dirigidos íntegramente por el <strong>Departamento de Investigación y Desarrollo Biofarmacéutico</strong>. Este producto es el resultado del esfuerzo conjunto del siguiente panel de investigadores y directores de laboratorio:
        </p>

        <div className="leaflet-team">
          <ul>
            <li><strong>[Nombre del Estudiante 1]</strong> – Investigador Desarrollador</li>
            <li><strong>[Nombre del Estudiante 2]</strong> – Investigador Desarrollador</li>
            <li><strong>[Nombre del Estudiante 3]</strong> – Investigador Desarrollador</li>
            <li><strong>[Nombre del Estudiante 4]</strong> – Investigador Desarrollador</li>
            <li><strong>[Nombre del Estudiante 5]</strong> – Investigador Desarrollador</li>
          </ul>
        </div>

        <div className="leaflet-sanidad-stamp">
          <div className="stamp-circle">
            <span className="stamp-text">APROBADO</span>
            <span className="stamp-subtext">MINISTERIO DE SANIDAD</span>
          </div>
        </div>

        <hr className="leaflet-divider" />

        <div className="leaflet-footer-columns">
          <div className="leaflet-column">
            <h3 className="leaflet-subtitle">TITULAR DE LA AUTORIZACIÓN:</h3>
            <p className="leaflet-text-small">
              Laboratorios Centrales InoBypass S.A.<br/>
              Av. de la Ciencia y la Salud, Edificio 4.<br/>
              Distrito Universitario, CP 1960.
            </p>
          </div>
          <div className="leaflet-column">
            <h3 className="leaflet-subtitle">CENTRO DE CONSULTAS Y REACCIONES ADVERSAS:</h3>
            <p className="leaflet-text-small">
              Para consultas médicas, reporte de efectos adversos o mayor información sobre este producto, diríjase a su médico o farmacéutico.<br/>
              <strong>Servicio de Atención Permanente:</strong> Extensión 405.
            </p>
          </div>
        </div>

        <div className="leaflet-stamp">
          <p>Impreso y revisado en Julio, 1960.</p>
          <p className="leaflet-code">C.I.-4092-B</p>
        </div>
        
        <p style={{ fontSize: '0.75rem', marginTop: '1.5rem', textAlign: 'center', opacity: 0.8 }}>
          Laboratorios@inobypass.com
        </p>
      </div>
    </motion.div>
  );
}
