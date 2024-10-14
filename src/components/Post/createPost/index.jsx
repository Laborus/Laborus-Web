import React, { useState } from "react";
import styles from "./postModal.module.css"; 
import { TbMessage2Off, TbMessageCircle } from "react-icons/tb"; 
import { FaImage } from "react-icons/fa";

export function PostModal({ onClose }) {
  const [image, setImage] = useState(null);
  const [commentsDisabled, setCommentsDisabled] = useState(false);

  const handleMediaUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleComments = () => {
    setCommentsDisabled((prevState) => !prevState);
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains(styles.modal)) {
      onClose();
    }
  };

  return (
    <div className={`${styles.modal} ${styles.show}`} onClick={handleOutsideClick}> 
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <div className={styles.postHeader}>
          <div className={styles.userInfo}>
            <img
              src="src/assets/images/user-laborus.jpeg"
              alt="User Avatar"
              className={styles.userAvatar}
            />
            <div className={styles.avatarContent}>
              <h4>Ana Maria</h4>
              <button className={styles.feedBtn}>Feed Global</button>
            </div>
          </div>
        </div>
        <div className={styles.postContent}>
          <input
            type="text"
            placeholder="Título aqui..."
            className={styles.createPostTitle}
          />
          <textarea
            placeholder="Escreva alguma coisa..."
            className={styles.createPostText}
          ></textarea>

          {image && (
            <div className={styles.imagePreviewContainer}>
              <img src={image} alt="Preview" className={styles.imagePreview}/>
              <span
                onClick={() => setImage(null)}
                className={styles.removeImageBtn}
              >
                &times;
              </span>
            </div>
          )}

          <div className={styles.postFooter}>
            <button
              className={`${styles.imageUploadBtn} ${image ? styles.disabled : ''}`}
              onClick={() => {
                if (!image) {
                  document.getElementById("media-upload-input").click();
                }
              }}
              disabled={image}
            >
              <FaImage />
            </button>
            <input
              type="file"
              id="media-upload-input"
              style={{ display: "none" }}
              accept="image/*,video/mp4,video/x-m4v,video/*"
              onChange={handleMediaUpload}
            />

            <button
              className={styles.disableCommentsBtn}
              onClick={toggleComments}
              title={
                commentsDisabled ? "Comentários desativados" : "Desativar Comentários"
              }
            >
              {commentsDisabled ? <TbMessageCircle /> : <TbMessage2Off />}
            </button>
          </div>
        </div>
        <button className={styles.publishBtn}>Publicar</button>
      </div>
    </div>
  );
}
