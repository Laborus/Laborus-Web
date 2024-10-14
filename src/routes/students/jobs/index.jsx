// src/pages/Jobs.jsx
import NavBar from "../../../components/Sidebar/navbar";
import SearchSection from "../../../components/SearchSection";
import {
  FaBriefcase,
  FaClock,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa"; // Importando ícones
import "./style.css";

export default function Jobs() {
  return (
      <div class="chat-container">
        <SearchSection />

        <main class="profile-content">
          <div class="cover-photo">
            <img
              src="src/assets/images/post-example-2.jpeg"
              alt="Cover Photo"
            />
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
                    Atender chamados abertos pelos clientes via aplicação,
                    contato telefônico, e-mail, on demand, remoto, etc,
                    solucinando os problemas apresentados pelo cliente; Garantir
                    o melhor atendimento visando a jornada e a experiência do
                    cliente, nutrindo a confiabilidade; Levantar feedbacks dos
                    clientes, observando erros recorrentes para antecipar e
                    evitar novos chamados, por motivos semelhantes; Solucionar
                    efetivamente os problemas demandados, usando de teste e
                    conhecimento do ambiente do cliente para tratativa acessível
                    a cada público;
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
  );
}
