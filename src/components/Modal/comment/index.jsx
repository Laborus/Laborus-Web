import React from 'react';
import './style.css';

export default function CommentModal({ onClose }) {
  return (
    <div className="comment-modal">
      <div className="comment-modal-content">
        <span className="close-comment-modal" onClick={onClose}>&times;</span>
        <div className="comments-header">
          <h3>Comentários <span className="comment-count">3</span></h3>
          <div className="comment-tabs">
            <button className="comment-filter recent active">Recentes</button>
            <button className="comment-filter old">Antigos</button>
            <button className="comment-filter like">Mais curtidos</button>
          </div>
        </div>
        <div className="comments-list">
          {/* Mapeie e renderize os comentários */}
          <div className="comment-item">
            <img src="/assets/images/user-laborus.jpeg" alt="User Profile" className="comment-profile-img" />
            <div className="comment-details">
              <div className="comment-user-info">
                <h4>Ana Maria (Você)</h4>
                <span> • 2 dias atrás</span>
              </div>
              <p>Agradeço imensamente a atenção de todos...</p>
            </div>
          </div>
          <div className="comment-input-section">
            <img src="/assets/images/user-laborus.jpeg" alt="User Profile" className="comment-input-profile-img" />
            <textarea placeholder="Comente algo..." className="comment-input" rows="1"></textarea>
            <button className="send-button" disabled>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
