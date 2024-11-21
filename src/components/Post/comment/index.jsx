import React from "react";
import styles from "./commentModal.module.css";
import { FaPaperPlane } from "react-icons/fa";

export default function CommentModal({ onClose }) {
  return (
    <div className={styles.commentModal}>
      <div className={styles.commentModalContent}>
        <span className={styles.closeCommentModal} onClick={onClose}>
          &times;
        </span>
        <div className={styles.commentsHeader}>
          <h3>
            Comentários <span className={styles.commentCount}>3</span>
          </h3>
          <div className={styles.commentTabs}>
            <button className={`${styles.commentFilter} ${styles.active}`}>
              Recentes
            </button>
            <button className={styles.commentFilter}>Antigos</button>
            <button className={styles.commentFilter}>Mais curtidos</button>
          </div>
        </div>
        <div className={styles.commentsList}>
          <div className={styles.commentItem}>
            <img
              src="/user-laborus.jpeg"
              alt="User Profile"
              className={styles.commentProfileImg}
            />
            <div className={styles.commentDetails}>
              <div className={styles.commentUserInfo}>
                <h4>Ana Maria (Você)</h4>
                <span> • 2 dias atrás</span>
              </div>
              <p>Agradeço imensamente a atenção de todos...</p>
            </div>
          </div>
          <div className={styles.commentInputSection}>
            <img
              src="/user-laborus.jpeg"
              alt="User Profile"
              className={styles.commentInputProfileImg}
            />
            <textarea
              placeholder="Comente algo..."
              className={styles.commentInput}
              rows="1"
            ></textarea>
            <button className={styles.sendButton} disabled>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
