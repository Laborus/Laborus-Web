import React, { useState } from "react";
import styles from "./post.module.css";
import CommentModal from "./comment";
import PostActions from "./actions";
import PostHeader from "./header";

export default function Post({ post }) {
  const [commentModalOpen, setCommentModalOpen] = useState(false);

  const toggleCommentModal = () => {
    setCommentModalOpen(!commentModalOpen);
  };

  return (
    <section className={styles.post}>
      <PostHeader post={post} />
      <h1 className={styles.postTitle}>{post.title}</h1>
      <p className={styles.postText}>{post.text}</p>
      {post.image && (
        <div className={styles.postImageContainer}>
          <img src={post.image} alt="Post" className={styles.postImage} />
        </div>
      )}
      <PostActions post={post} onCommentClick={toggleCommentModal} />
      <div className={styles.postComment} id="openCommentModalBtn">
        <img
          src="/user-laborus.jpeg"
          alt="Profile Picture"
          className={styles.commentProfileImg}
        />
        <div className={styles.commentContent} onClick={toggleCommentModal}>
          <p>Comente algo...</p>
        </div>
        {commentModalOpen && <CommentModal onClose={toggleCommentModal} />}
      </div>
    </section>
  );
}
