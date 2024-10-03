import React, { useState, useEffect, useRef } from 'react';
import { TbLogout2 } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser , FaRegBookmark } from "react-icons/fa";
import './style.css';
import { LogoutModal } from '../logout';

export default function ProfileSection() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const openLogoutModal = () => {
    setLogoutModalVisible(true);
  };

  const closeLogoutModal = () => {
    setLogoutModalVisible(false);
  };

  const handleLogout = () => {
    console.log("Usuário deslogado");
    closeLogoutModal();
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="profile-section" id="profile-dropdown-btn" onClick={toggleDropdown}>
      <img
        src="src/assets/images/user-laborus.jpeg"
        alt="Profile Picture"
        className="profile-img"
      />
      <div className="profile-user-info">
        <span className="profile-user-name">Ana Maria</span>
        <span className="profile-user-role">Estudante</span>
      </div>
      {isDropdownVisible && (
        <div ref={dropdownRef} className="profile-dropdown">
          <div className="menu-item">
            <FaRegUser/> Perfil
          </div>
          <div className="menu-item">
            <FaRegBookmark/> Salvos
          </div>
          <div className="menu-item">
            <IoSettingsOutline/> Configurações
          </div>
          <div id="logout-btn" className="menu-item" onClick={openLogoutModal}>
            <TbLogout2 />
            Sair
          </div>
        </div>
      )}
      {isLogoutModalVisible && (
        <LogoutModal onClose={closeLogoutModal} onLogout={handleLogout} />
      )}
    </div>
  );
}
