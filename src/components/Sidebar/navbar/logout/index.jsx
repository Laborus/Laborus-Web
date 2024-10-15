import React from 'react';
import styles from './logout.module.css';

export function LogoutModal({ onClose, onLogout }) {
  return (
    <div className={styles.modalLogout}>
      <div className={styles.logoutModalContent}>
        <h2>Saindo...</h2>
        <p>Tem certeza de que deseja sair?</p>
        <div className={styles.logoutModalButtons}>
          <button id={styles.confirmLogout} onClick={onLogout}>Sair</button>
          <button id={styles.cancelLogout} onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
