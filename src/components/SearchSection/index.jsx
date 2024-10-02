import { FaSearch, FaTimes, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import "./style.css";

export default function SearchSection() {
  return (
    <aside class="chat-sidebar">
      <header class="chat-sidebar-header">
        <h1 class="chat-title">Vagas</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar vaga..."
            id="search-input"
            class="search-bar"
          />
          <FaSearch className="search-icon" />
          <button class="clear-btn" id="clearButton">
            &times;
          </button>
        </div>

        <div class="filter-buttons">
          <button class="filter-button active" id="filter-students">
            Estágio
          </button>
          <button class="filter-button" id="filter-companies">
            Jovem Aprendiz
          </button>
        </div>
      </header>

      <ul class="connections-list students">
        <li class="connection-list-item">
          <div class="wrap-job-content">
            <img src="/assets/images/user-company-1.png" alt="Profile Image" />
            <div class="connection-info">
              <h2 class="name-connection">Estagiários 2/2024</h2>
              <div class="school-info">
                <FaBriefcase />
                <span>Santander</span>
              </div>
              <div class="school-info">
                <FaMapMarkerAlt />
                <span>Carapicuíba | São Paulo</span>
              </div>
            </div>
          </div>
          <div class="connections-buttons">
            <button id="cancel-btn">&times;</button>
          </div>
        </li>
      </ul>
      <ul class="connections-list companies">
        <li class="connection-list-item">
          <img src="../assets/images/user-company-1.png" alt="Profile Image" />
          <div class="connection-info">
            <h2 class="name-connection">Programa Aprendiz</h2>
            <div class="school-info">
              <FaBriefcase />
              <span>Santander</span>
            </div>
            <div class="school-info">
              <FaMapMarkerAlt />
              <span>Carapicuíba | São Paulo</span>
            </div>
            <div class="connections-buttons">
              <button id="confirm-btn">Candidatar-se</button>
            </div>
          </div>
        </li>
        <li class="connection-list-item">
          <img src="/assets/images/user-company-2.png" alt="Profile Image" />
          <div class="connection-info">
            <h2 class="name-connection">Jovem Aprendiz (2024)</h2>
            <div class="school-info">
              <FaBriefcase />
              <span>Google</span>
            </div>
            <div class="school-info">
              <FaMapMarkerAlt />
              <span>Osasco | São Paulo</span>
            </div>
            <div class="connections-buttons">
              <button id="confirm-btn">Candidatar-se</button>
            </div>
          </div>
        </li>
      </ul>
    </aside>
  );
}
