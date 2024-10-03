import React, { useState } from "react";
import "./style.css";
import CommentModal from "./comment";
import PostActions from "./actions";
import PostHeader from "./header";

export default function Post({ post }) {
  const [commentModalOpen, setCommentModalOpen] = useState(false);

  const toggleCommentModal = () => {
    setCommentModalOpen(!commentModalOpen);
  };

  return (
    <section className="post">
      <PostHeader post={post} />
      <h1 className="post-title">{post.title}</h1>
      <p className="post-text">{post.text}</p>
      {post.image && (
        <div className="post-image-container">
          <img src={post.image} alt="Post" className="post-image" />
        </div>
      )}
      <PostActions post={post} onCommentClick={toggleCommentModal} />
      <div className="post-comment" id="openCommentModalBtn">
        <img
          src="src/assets/images/user-laborus.jpeg"
          alt="Profile Picture"
          className="post-profile-img"
        />
        <div className="comment-content" onClick={toggleCommentModal}>
          <p>Comente algo...</p>
        </div>
        {commentModalOpen && <CommentModal onClose={toggleCommentModal} />}
      </div>
    </section>
  );
}
