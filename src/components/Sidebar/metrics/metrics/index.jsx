import React from 'react';
import styles from './metrics.module.css';

export default function MetricsSection() {
  return (
    <section className={styles.campusMetrics}>
      <h3>Métricas de Desafios</h3>
      <div className={styles.metrics}>
        <MetricItem label="Progresso" count="4.23%" />
        <MetricItem label="Resolvidos" count="54" />
        <MetricItem label="Pontuação" count="124" />
      </div>
    </section>
  );
}

function MetricItem({ label, count }) {
  return (
    <div className={styles.points}>
      <p className={styles.pointsLabel}>{label}</p>
      <span className={styles.pointsCount}>{count}</span>
    </div>
  );
}