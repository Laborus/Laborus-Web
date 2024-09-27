import React from 'react';
import './style.css';

export function ProfileDropdown() {
  return (
    <div className="profile-dropdown">
      <div className="menu-item">
        <img src="/assets/vectors/profile-icon.svg" alt="Profile Icon" /> Perfil
      </div>
      <div className="menu-item">
        <img src="/assets/vectors/save-icon.svg" alt="Saved Icon" /> Salvos
      </div>
      <div className="menu-item">
        <img src="/assets/vectors/settings-icon.svg" alt="Settings Icon" /> Configurações
      </div>
      <div className="menu-item">
        <img src="/assets/vectors/logout-icon.svg" alt="Logout Icon" /> Sair
      </div>
    </div>
  );
}
