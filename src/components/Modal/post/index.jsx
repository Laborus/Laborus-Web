import React, { useState } from 'react';
import './style.css';

export function PostModal({ onClose }) {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="post-header">
          <div className="user-info">
            <img src="/assets/images/user-laborus.jpeg" alt="User Avatar" className="user-avatar" />
            <div className="avatar-content">
              <h4>Ana Maria</h4>
              <button className="feed-btn">Feed Global</button>
            </div>
          </div>
        </div>
        <div className="post-content">
          <input type="text" placeholder="Título aqui..." className="create-post-title" />
          <textarea placeholder="Escreva alguma coisa..." className="create-post-text"></textarea>
          {image && (
            <div className="image-preview-container">
              <img src={image} alt="Preview" />
              <span onClick={() => setImage(null)} className="remove-image-btn">&times;</span>
            </div>
          )}
          <div className="post-footer">
            <button className="image-upload-btn">
              <input type="file" onChange={handleImageUpload} />
            </button>
          </div>
        </div>
        <button className="publish-btn">Publicar</button>
      </div>
    </div>
  );
}
