import React, { useState } from "react";
import { MdSchool } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { TbMessage2Off } from "react-icons/tb";
import { FaRegBookmark, FaRegTrashAlt } from "react-icons/fa";
import { RiEdit2Line } from "react-icons/ri";
import styles from "./headerPost.module.css";

export default function PostHeader({ post }) {
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const toggleOptionsMenu = () => {
    setShowOptionsMenu((prevState) => !prevState);
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
    setShowOptionsMenu(false);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const confirmDelete = () => {
    console.log("Post excluído");
    closeDeleteModal();
  };

  return (
    <header className={styles.postHeader}>
      <img
        src="/user-laborus.jpeg"
        alt="Profile Picture"
        className={styles.postProfileImg}
      />
      <div className={styles.postInfo}>
        <div className={styles.postedBy}>
          <h2 className={styles.postUsername}>{post.username}</h2>
          <div className={styles.schoolInfo}>
            <MdSchool className={styles.schoolInfoSvg} />
            <span className={styles.postUsernameSchool}>{post.school}</span>
            <span className={styles.postDate}>• {post.date}</span>
          </div>
        </div>
        <div className={styles.postOptions} onClick={toggleOptionsMenu}>
          <BsThreeDots />
          {showOptionsMenu && (
            <div id="post-options-menu" className={styles.postOptionsMenu}>
              <div className="menu-item">
                <FaRegBookmark className={styles.svg} /> Salvar
              </div>
              <div className="menu-item">
                <RiEdit2Line className={styles.svg} /> Editar
              </div>
              <div className="menu-item">
                <TbMessage2Off className={styles.svg} /> Ocultar curtidas
              </div>
              <div className="menu-item">
                <TbMessage2Off className={styles.svg} /> Desativar comentários
              </div>
              <div className="menu-item" onClick={openDeleteModal}>
                <FaRegTrashAlt className={styles.svg} /> Excluir publicação
              </div>
            </div>
          )}
        </div>
      </div>

      {showDeleteModal && (
        <div className={styles.deleteModal}>
          <div className={styles.deleteModalContent}>
            <h2>Excluir Publicação</h2>
            <p>Tem certeza de que deseja excluir esta publicação?</p>
            <div className={styles.deleteModalButtons}>
              <button
                className={styles.confirmDeletePost}
                onClick={confirmDelete}
              >
                Excluir
              </button>
              <button
                className={styles.cancelDeletePost}
                onClick={closeDeleteModal}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
