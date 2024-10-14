import NavBar from "../../../components/Sidebar/navbar";
import {
  FaSearch,
  FaEllipsisH,
  FaImage,
  FaVideo,
  FaPaperPlane,
} from "react-icons/fa";

import "./style.css";

export default function Chats() {
  return (
    <div class="chat-container">
      <aside class="chat-sidebar">
        <header class="chat-sidebar-header">
          <h1 class="chat-title">Conversas</h1>
          <div class="search-container">
            <input
              type="text"
              placeholder="Buscar"
              id="search-input"
              class="search-bar"
            />

            <FaSearch className="search-icon" />
            <button class="clear-btn" id="clearButton">
              &times;
            </button>
          </div>
        </header>
        <ul class="chat-list">
          <li class="chat-list-item active">
            <img
              src="src/assets/images/user-laborus.jpeg"
              alt="Profile Image"
            />
            <div class="status-indicator online"></div>
            <div class="chat-info">
              <h2 class="name-chat">Juliane Bonfim</h2>
              <p class="last-message active">
                Você: Formação: As 5 últimas mensagens desse usuário serão
              </p>
            </div>
            <span class="chat-time active">01:33</span>
          </li>
          <li class="chat-list-item">
            <img
              src="src/assets/images/user-laborus.jpeg"
              alt="Profile Image"
            />
            <div class="status-indicator"></div>
            <div class="chat-info">
              <h2 class="name-chat">Rogério Rocha</h2>
              <p class="last-message">
                Você: Formação: As 5 últimas mensagens desse usuário serão
              </p>
            </div>
            <span class="chat-time">01:33</span>
          </li>
          <li class="chat-list-item">
            <img
              src="src/assets/images/user-laborus.jpeg"
              alt="Profile Image"
            />
            <div class="status-indicator"></div>
            <div class="chat-info">
              <h2 class="name-chat">Juliane Bonfim</h2>
              <p class="last-message">
                Você: Formação: As 5 últimas mensagens desse usuário serão
              </p>
            </div>
            <span class="chat-time">01:33</span>
          </li>
        </ul>
      </aside>

      <main class="chat-content">
        <header class="chat-header">
          <div class="user-info">
            <img
              class="user-picture"
              src="src/assets/images/user-laborus.jpeg"
              alt=""
            />
            <div class="user-info-text">
              <h3 class="username">Juliane Bonfim</h3>
              <p class="user-status">Digitando...</p>
            </div>
          </div>
          <div class="chat-options" id="chat-options-btn">
            <FaEllipsisH />

            <div id="chat-options-menu" class="chat-options-menu hidden">
              <div class="menu-item">
                <img src="/assets/vectors/report-icon.svg" alt="Save Icon" />{" "}
                Denunciar
              </div>

              <div class="menu-item">
                <img src="/assets/vectors/delete-icon.svg" alt="Delete Icon" />{" "}
                Excluir conversa
              </div>
            </div>
          </div>

          {/* Report Connection Modal */}
          <div id="report-modal" class="modal hidden">
            <div class="modal-content">
              <h2>Denunciar conexão</h2>
              <p>
                As 5 últimas mensagens desse usuário serão enviadas para a nossa
                equipe que avaliará a denúncia. O usuário denunciado não será
                notificado desta ação.{" "}
              </p>
              <div class="modal-buttons">
                <button id="confirm-report">Denunciar</button>
                <button id="cancel-report">Cancelar</button>
              </div>
            </div>
          </div>

          {/* Delete Chat Modal  */}
          <div id="delete-modal" class="modal hidden">
            <div class="modal-content">
              <h2>Excluir conversa</h2>
              <p>
                Tem certeza de que deseja excluir esta conversa? Esta ação não
                pode ser desfeita.
              </p>
              <div class="modal-buttons">
                <button id="confirm-delete">Excluir</button>
                <button id="cancel-delete">Cancelar</button>
              </div>
            </div>
          </div>
        </header>
        <div class="chat-messages">
          <div class="message received">
            <p>
              Mn, nós temos que revisar as sprints, pq senão dá
              problemakkkkkkkkkkkk...
            </p>
            <span class="message-time">01:33</span>
          </div>
          <div class="message received">
            <p>Secho ocasional...</p>
            <span class="message-time">01:33</span>
          </div>

          <div class="message sent">
            <img
              src="src/assets/images/post-example-2.jpeg"
              alt=""
              class="message-media"
            />
            <span class="message-time">01:34</span>
          </div>

          <div class="message sent">
            <p>
              As 5 últimas mensagens desse usuário serão enviadas para a nossa
              equipe que avaliará a denúncia. O usuário denunciado não será
              notificado desta ação.{" "}
            </p>
            <span class="message-time">01:34</span>
          </div>
        </div>
        <footer class="chat-footer">
          <button id="select-image" class="select-image">
            <FaImage class="fa fa-image" />
          </button>
          <button id="select-video" class="select-video">
            <FaVideo class="fa fa-video" />
          </button>
          <input type="text" placeholder="Mensagem" class="chat-input" />
          <button class="send-button" disabled>
            <FaPaperPlane class="fa fa-paper-plane" />
          </button>
        </footer>

        <div id="imageSelectModal" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Selecione e corte a imagem</h2>
            <div class="crop-container">
              <img id="image-to-crop" src="" alt="Imagem para cortar" />
            </div>
            <div class="crop-actions">
              <button id="rotate-left" class="rotate-btn">
                ⟲
              </button>
              <button id="rotate-right" class="rotate-btn">
                ⟳
              </button>
              <button id="crop-confirm" class="crop-btn">
                Confirmar
              </button>
              <button id="crop-cancel" class="crop-btn">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
