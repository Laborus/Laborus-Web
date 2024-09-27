import React from 'react';
import './style.css';

export function LogoutModal({ onClose }) {
  return (
    <div className="modal-logout">
      <div className="logout-modal-content">
        <h2>Saindo...</h2>
        <p>Tem certeza de que deseja sair?</p>
        <div className="logout-modal-buttons">
          <button>Sair</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
