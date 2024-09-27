import React, { useState } from 'react';
import './style.css';
import CommentModal from '../Modal/comment';
import PostActions from './actions';
import PostHeader from './header';

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
      {commentModalOpen && <CommentModal onClose={toggleCommentModal} />}
    </section>
  );
}
