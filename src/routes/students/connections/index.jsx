import NavBar from "../../../components/Sidebar/navbar";
import SearchSection from "../../../components/SearchSection";
import {
  FaBriefcase,
  FaClock,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa"; // Importando ícones
import "./style.css";

export default function Connections() {
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
                  src="src/assets/images/user-laborus.jpeg"
                  alt="Profile Picture"
                />
              </div>
              <div class="profile-details">
                <h1>Juliane Bonfim</h1>
                <div class="school-info">
                  <img src="/assets/vectors/vector_411_x2.svg" alt="" />
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
