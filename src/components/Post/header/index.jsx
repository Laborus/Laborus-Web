import React, { useState } from 'react';
import { MdSchool } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { TbMessage2Off} from "react-icons/tb"; 
import { FaRegBookmark, FaRegTrashAlt } from "react-icons/fa";
import { RiEdit2Line } from "react-icons/ri";

import './style.css';

export default function PostHeader({ post }) {
  // Estado para controlar a visibilidade do menu de opções e do modal de exclusão
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Função para alternar a visibilidade do menu de opções
  const toggleOptionsMenu = () => {
    setShowOptionsMenu(prevState => !prevState);
  };

  // Funções para abrir e fechar o modal de exclusão
  const openDeleteModal = () => {
    setShowDeleteModal(true);
    setShowOptionsMenu(false); // Fecha o menu de opções ao abrir o modal
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const confirmDelete = () => {
    // Aqui você pode adicionar a lógica para excluir o post
    console.log('Post excluído');
    closeDeleteModal();
  };

  return (
    <header className="post-header">
      <img src="src/assets/images/user-laborus.jpeg" alt="Profile Picture" className="post-profile-img" />
      <div className="post-info">
        <div className="posted-by">
          <h2 className="post-username">{post.username}</h2>
          <div className="school-info">
            <MdSchool />
            <span className="post-username-school">{post.school}</span>
            <span className="post-date">• {post.date}</span>
          </div>
        </div>
        <div className="post-options" onClick={toggleOptionsMenu}>
          <BsThreeDots />
          {showOptionsMenu && (
            <div id="post-options-menu" className="post-options-menu">
              <div className="menu-item">
              <FaRegBookmark/> Salvar
              </div>
              <div className="menu-item">
                <RiEdit2Line/> Editar
              </div>
              <div className="menu-item">
                <TbMessage2Off/> Ocultar curtidas
              </div>
              <div className="menu-item">
              <TbMessage2Off/> Desativar comentários
              </div>
              <div className="menu-item" onClick={openDeleteModal}>
                <FaRegTrashAlt/> Excluir publicação
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal de exclusão */}
      {showDeleteModal && (
        <div id="delete-post-modal" className="delete-modal">
          <div className="delete-modal-content">
            <h2>Excluir Publicação</h2>
            <p>Tem certeza de que deseja excluir esta publicação?</p>
            <div className="delete-modal-buttons">
              <button id="confirm-delete-post" onClick={confirmDelete}>Excluir</button>
              <button id="cancel-delete-post" onClick={closeDeleteModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
