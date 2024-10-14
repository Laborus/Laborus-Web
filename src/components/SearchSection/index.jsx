import { useState } from "react";
import { FaSearch, FaTimes, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import "./style.css";

export default function SearchSection() {
  const [activeFilter, setActiveFilter] = useState("students"); // Estado para armazenar o filtro ativo

  // Função para alternar entre os filtros
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <aside className="chat-sidebar">
      <header className="chat-sidebar-header">
        <h1 className="chat-title">Vagas</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar vaga..."
            id="search-input"
            className="search-bar"
          />
          <FaSearch className="search-icon" />
          <button className="clear-btn" id="clearButton">
            &times;
          </button>
        </div>

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
            <img src="src/assets/images/fatec-image.png" alt="Profile Image" />
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
  );
}
