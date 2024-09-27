import React from 'react';
import './style.css';  

export default function MetricsSection() {
  return (
    <section className="campus-metrics">
      <h3>Métricas de Desafios</h3>
      <div className="metrics">
        <MetricItem label="Progresso" count="4.23%" />
        <MetricItem label="Resolvidos" count="54" />
        <MetricItem label="Pontuação" count="124" />
      </div>
    </section>
  );
}

function MetricItem({ label, count }) {
  return (
    <div className="points">
      <p className="points-label">{label}</p>
      <span className="points-count">{count}</span>
    </div>
  );
}
