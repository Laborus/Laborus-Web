import SearchBar from "../../../components/SearchBar";
import {
  FaBriefcase,
  FaClock,
  FaMapMarkerAlt,
  FaBuilding,
  FaSearch,
  FaTimes,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa"; // Importando ícones

import { useState } from "react";

import "./style.css";

export default function Connections() {
  const [activeFilter, setActiveFilter] = useState("students"); // Estado para armazenar o filtro ativo

  // Função para alternar entre os filtros
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div class="chat-container">
      <aside className="chat-sidebar">
        <header className="chat-sidebar-header">
          <h1 className="chat-title">Conexões</h1>
          <SearchBar />

          <div className="filter-buttons">
            <button
              className={`filter-button ${
                activeFilter === "students" ? "active" : ""
              }`}
              onClick={() => handleFilterClick("students")}
            >
              Estudantes
            </button>
            <button
              className={`filter-button ${
                activeFilter === "companies" ? "active" : ""
              }`}
              onClick={() => handleFilterClick("companies")}
            >
              Empresas
            </button>
            <button
              className={`filter-button ${
                activeFilter === "institutions" ? "active" : ""
              }`}
              onClick={() => handleFilterClick("institutions")}
            >
              Instituições
            </button>
          </div>
        </header>

        {/* Lista de Estudantes*/}
        <ul
          class="connections-list students"
          style={{ display: activeFilter === "students" ? "block" : "none" }}
        >
          <li class="connection-list-item">
            <div class="wrap-user-content">
              <img
                src="src/assets/images/user-laborus.jpeg"
                alt="Profile Image"
              />
              <div class="connection-info">
                <h2 class="name-connection">Juliane Bonfim</h2>
                <div class="school-info">
                  <FaGraduationCap />
                  <span>Fatec Carapicuíba</span>
                </div>
              </div>
            </div>
            <div class="connections-buttons">
              <button id="confirm-btn">Adicionar</button>
            </div>
          </li>
        </ul>

        {/* Lista de Empresas*/}
        <ul
          class="connections-list companies"
          style={{ display: activeFilter === "companies" ? "block" : "none" }}
        >
          <li class="connection-list-item">
            <div class="wrap-user-content">
              <img
                src="src/assets/images/fatec-image.png"
                alt="Profile Image"
              />
              <div class="connection-info">
                <h2 class="name-connection">Santander</h2>
                <div class="school-info">
                  <FaMapMarkerAlt />
                  <span>Osasco | São Paulo</span>
                </div>
                <div class="school-info">
                  <FaUsers />
                  <span>3.321 Seguidores</span>
                </div>
              </div>
            </div>
            <div class="connections-buttons">
              <button id="confirm-btn">Seguir</button>
            </div>
          </li>
        </ul>

        {/* Lista de Instituicoes*/}
        <ul
          class="connections-list schools"
          style={{
            display: activeFilter === "institutions" ? "block" : "none",
          }}
        >
          <li class="connection-list-item">
            <div class="wrap-user-content">
              <img
                src="src/assets/images/fatec-image.png"
                alt="Profile Image"
              />
              <div class="connection-info">
                <h2 class="name-connection">E.E. Dona Maria Alice</h2>
                <div class="school-info">
                  <FaMapMarkerAlt />
                  <span>Carapicuíba | São Paulo</span>
                </div>
                <div class="school-info">
                  <FaUsers />
                  <span>3.321 Seguidores</span>
                </div>
              </div>
            </div>
            <div class="connections-buttons">
              <button id="confirm-btn">Seguir</button>
            </div>
          </li>
        </ul>
      </aside>

      <main class="profile-content">
        <div class="cover-photo">
          <img src="src/assets/images/post-example-2.jpeg" alt="Cover Photo" />
        </div>
        <div class="profile-info">
          <div class="profile-user-info-details">
            <div class="profile-pic-container">
              <img
                class="profile-pic"
                src="src/assets/images/user-laborus.jpeg"
                alt="Profile Picture"
              />
            </div>
            <div class="profile-details">
              <h1>Juliane Bonfim</h1>
              <div class="school-info">
                <FaGraduationCap />
                <span>Fatec Carapicuíba</span>
              </div>
            </div>
          </div>
          <div class="profile-actions">
            <button class="add-friend-btn">Adicionar</button>
          </div>
        </div>
        <nav class="profile-nav">
          <ul>
            <li class="active">Sobre</li>
            <li>Publicações</li>
            <li>Comentários</li>
          </ul>
        </nav>
        <section class="profile-main-content">
          <div class="profile-about">
            <div class="tag-container">
              <span class="tag">Tecnologia</span>
              <span class="tag">História</span>
              <span class="tag">Robótica</span>
            </div>
            <div class="about-wrapper">
              <div class="about-section">
                <h2>Sobre</h2>
                <p>
                  Arte é minha maior paixão, eu sou gamada em Fotografia e
                  Design...Marketing também haha me adiciona aí para
                  conversarmos! Arte é minha maior paixão, eu sou gamada em
                  Fotografia e Design...Marketing também haha me adiciona aí
                  para conversarmos! :)
                </p>
              </div>
              <div class="course-section">
                <h2>Curso</h2>
                <p>Análise e Desenvolvimento de Sistemas</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
