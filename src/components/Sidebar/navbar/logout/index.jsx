import React from 'react';
import './style.css';

export function LogoutModal({ onClose, onLogout }) {
  return (
    <div className="modal-logout">
      <div className="logout-modal-content">
        <h2>Saindo...</h2>
        <p>Tem certeza de que deseja sair?</p>
        <div className="logout-modal-buttons">
          <button id='confirm-logout' onClick={onLogout}>Sair</button>
          <button id='cancel-logout' onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
