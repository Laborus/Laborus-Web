import React from 'react';
import styles from './action.module.css';
import { BiLike } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { GoShareAndroid } from "react-icons/go";

export default function PostActions({ post, onCommentClick }) {
  return (
    <div className={styles.postActions}>
      <div className={`${styles.postActionBtn} ${styles.likeButton}`}>
        <span><BiLike/> {post.likes}</span>
      </div>
      <div className={styles.postActionBtn} onClick={onCommentClick}>
        <span><BsChat/> {post.comments}</span>
      </div>
      <div className={styles.postActionBtn}>
        <span><GoShareAndroid/> {post.shares}</span>
      </div>
    </div>
  );
}
