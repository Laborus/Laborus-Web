import React from 'react';
import './style.css';
import { BiLike } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { GoShareAndroid } from "react-icons/go";

export default function PostActions({ post, onCommentClick }) {
  return (
    <div className="post-actions">
      <div className="post-action-btn like-button">
        <span><BiLike/> {post.likes}</span>
      </div>
      <div className="post-action-btn" onClick={onCommentClick}>
        <span><BsChat/> {post.comments}</span>
      </div>
      <div className="post-action-btn">
        <span><GoShareAndroid/> {post.shares}</span>
      </div>
    </div>
  );
}
