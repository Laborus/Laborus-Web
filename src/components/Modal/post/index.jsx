import React, { useState } from "react";
import "./style.css";
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
    if (event.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div className="modal show" onClick={handleOutsideClick}> 
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="post-header">
          <div className="user-info">
            <img
              src="src/assets/images/user-laborus.jpeg"
              alt="User Avatar"
              className="user-avatar"
            />
            <div className="avatar-content">
              <h4>Ana Maria</h4>
              <button className="feed-btn">Feed Global</button>
            </div>
          </div>
        </div>
        <div className="post-content">
          <input
            type="text"
            placeholder="Título aqui..."
            className="create-post-title"
          />
          <textarea
            placeholder="Escreva alguma coisa..."
            className="create-post-text"
          ></textarea>

          {image && (
            <div className="image-preview-container">
              <img src={image} alt="Preview" className="image-preview"/>
              <span
                onClick={() => setImage(null)}
                className="remove-image-btn"
              >
                &times;
              </span>
            </div>
          )}

          <div className="post-footer">
            <button
              className={`image-upload-btn ${image ? 'disabled' : ''}`}
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
              className="disable-comments-btn"
              onClick={toggleComments}
              title={
                commentsDisabled ? "Comentários desativados" : "Desativar Comentários"
              }
            >
              {commentsDisabled ? <TbMessageCircle /> : <TbMessage2Off />}
            </button>
          </div>
        </div>
        <button className="publish-btn">Publicar</button>
      </div>
    </div>
  );
}
