import React from 'react';
import './style.css';

export default function PostActions({ post, onCommentClick }) {
  return (
    <div className="post-actions">
      <div className="post-action-btn like-button">
        <span><img src="/assets/vectors/vector_39_x2.svg" alt="Likes" /> {post.likes}</span>
      </div>
      <div className="post-action-btn" onClick={onCommentClick}>
        <span><img src="/assets/vectors/vector_419_x2.svg" alt="Comments" /> {post.comments}</span>
      </div>
      <div className="post-action-btn">
        <span><img src="/assets/vectors/vector_237_x2.svg" alt="Shares" /> {post.shares}</span>
      </div>
    </div>
  );
}
