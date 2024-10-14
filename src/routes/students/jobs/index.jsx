// src/pages/Jobs.jsx

import SearchBar from "../../../components/SearchBar";
import {
  FaBriefcase,
  FaClock,
  FaMapMarkerAlt,
  FaBuilding,
  FaSearch,
  FaTimes,
} from "react-icons/fa"; // Importando ícones

import { useState } from "react";

import "./style.css";

export default function Jobs() {
  const [activeFilter, setActiveFilter] = useState("students"); // Estado para armazenar o filtro ativo

  // Função para alternar entre os filtros
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div class="chat-container">
      <aside className="chat-sidebar">
        <header className="chat-sidebar-header">
          <h1 className="chat-title">Vagas</h1>
          <SearchBar />

          <div className="filter-buttons">
            <button
              className={`filter-button ${
                activeFilter === "students" ? "active" : ""
              }`}
              onClick={() => handleFilterClick("students")}
            >
              Estágio
            </button>
            <button
              className={`filter-button ${
                activeFilter === "companies" ? "active" : ""
              }`}
              onClick={() => handleFilterClick("companies")}
            >
              Jovem Aprendiz
            </button>
          </div>
        </header>

        {/* Lista de Estagiários */}
        <ul
          className="connections-list students"
          style={{ display: activeFilter === "students" ? "block" : "none" }}
        >
          <li className="connection-list-item">
            <div className="wrap-job-content">
              <img
                src="src/assets/images/fatec-image.png"
                alt="Profile Image"
              />
              <div className="connection-info">
                <h2 className="name-connection">Estagiários 2/2024</h2>
                <div className="school-info">
                  <FaBriefcase />
                  <span>Santander</span>
                </div>
                <div className="school-info">
                  <FaMapMarkerAlt />
                  <span>Carapicuíba | São Paulo</span>
                </div>
              </div>
            </div>
            <div className="connections-buttons">
              <button id="cancel-btn">&times;</button>
            </div>
          </li>
        </ul>

        {/* Lista de Jovem Aprendiz */}
        <ul
          className="connections-list companies"
          style={{ display: activeFilter === "companies" ? "block" : "none" }}
        >
          <li className="connection-list-item">
            <img src="src/assets/images/fatec-image.png" alt="Profile Image" />
            <div className="connection-info">
              <h2 className="name-connection">Programa Aprendiz</h2>
              <div className="school-info">
                <FaBriefcase />
                <span>Santander</span>
              </div>
              <div className="school-info">
                <FaMapMarkerAlt />
                <span>Carapicuíba | São Paulo</span>
              </div>
              <div className="connections-buttons">
                <button id="confirm-btn">Candidatar-se</button>
              </div>
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
                src="src/assets/images/fatec-image.png"
                alt="Profile Picture"
              />
            </div>
            <div class="profile-details">
              <h1>Jovem Aprendiz (2024)</h1>
              <div class="school-info">
                <FaBriefcase />
                <span>Santander</span>
              </div>
            </div>
          </div>
          <div class="profile-actions">
            <button class="add-friend-btn apply">Candidatar-se</button>
          </div>
        </div>
        <div class="jobs-details">
          <div class="school-info jobs posted">
            <FaClock />
            <span>Vaga publicada 6 horas atrás</span>
          </div>
          <div class="school-info jobs period">
            <FaClock />
            <span>
              <strong>Período:</strong> Manhã
            </span>
          </div>
          <div class="school-info jobs type">
            <FaBuilding />
            <span>
              <strong>Modalidade:</strong> Presencial
            </span>
          </div>
          <div class="school-info jobs location">
            <FaMapMarkerAlt />
            <span>
              <strong>Localização:</strong> Osasco | São Paulo
            </span>
          </div>
        </div>
        <section class="profile-main-content">
          <div class="profile-about">
            <div class="tag-container">
              <span class="tag">Tecnologia</span>
              <span class="tag">Inovação</span>
              <span class="tag">Financeiro</span>
            </div>
            <div class="about-wrapper">
              <div class="about-section">
                <h2>Descrição da vaga</h2>
                <p>
                  Atender chamados abertos pelos clientes via aplicação, contato
                  telefônico, e-mail, on demand, remoto, etc, solucinando os
                  problemas apresentados pelo cliente; Garantir o melhor
                  atendimento visando a jornada e a experiência do cliente,
                  nutrindo a confiabilidade; Levantar feedbacks dos clientes,
                  observando erros recorrentes para antecipar e evitar novos
                  chamados, por motivos semelhantes; Solucionar efetivamente os
                  problemas demandados, usando de teste e conhecimento do
                  ambiente do cliente para tratativa acessível a cada público;
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
