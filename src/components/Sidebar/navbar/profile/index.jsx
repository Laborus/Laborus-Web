import React, { useState, useEffect, useRef } from "react";
import { TbLogout2 } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser, FaRegBookmark } from "react-icons/fa";
import styles from "./profile.module.css";
import { LogoutModal } from "../logout";
import { useNavigate } from "react-router-dom"; // Importa o useNavigate

export default function ProfileSection() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // Inicializa o useNavigate

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

  const handleNavigate = () => {
    const currentPath = window.location.pathname;

    // Verifica se o usuário está em "school" ou "company"
    if (currentPath.includes("school")) {
      // Redireciona para o perfil de school
      navigate("/school/profile");
    } else if (currentPath.includes("company")) {
      // Redireciona para o perfil de company
      navigate("/company/profile");
    } else if (currentPath.includes("student")) {
      // Redireciona para o perfil de student
      navigate("/student/profile");
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      className={`${styles.profileSection} ${
        isDropdownVisible ? styles.profileSectionActive : ""
      }`}
      onClick={toggleDropdown}
    >
      <img
        src="/user-laborus.jpeg"
        alt="Profile Picture"
        className={styles.profileImg}
      />
      <div className={styles.profileUserInfo}>
        <span className={styles.profileUserName}>Ana Maria</span>
        <span className={styles.profileUserRole}>Estudante</span>
      </div>
      {isDropdownVisible && (
        <div ref={dropdownRef} className={styles.profileDropdown}>
          <div
            className={styles.dropdownItem}
            onClick={handleNavigate} // Redireciona ao clicar
          >
            <FaRegUser /> Perfil
          </div>
          <div
            className={styles.dropdownItem}
            // onClick={() => navigate("/company")}
          >
            <FaRegBookmark /> Salvos
          </div>
          <div
            className={styles.dropdownItem}
            // onClick={() => navigate("/company")}
          >
            <IoSettingsOutline /> Configurações
          </div>
          <div
            className={`${styles.dropdownItem} ${styles.dropdownItemLastChild}`}
            onClick={openLogoutModal}
          >
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
