import React from 'react';
import { MdSchool } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import './style.css';

export default function PostHeader({ post }) {
  return (
    <header className="post-header">
      <img src="src/assets/images/user-laborus.jpeg" alt="Profile Picture" className="post-profile-img" />
      <div className="post-info">
        <div className="posted-by">
          <h2 className="post-username">{post.username}</h2>
          <div className="school-info">
            <MdSchool />
            <span className="post-username-school">{post.school}</span>
            <span className="post-date">• {post.date}</span>
          </div>
        </div>
        <div className="post-options">
          <BsThreeDots/>
          {/* Implementar menu dropdown de opções de post */}
        </div>
      </div>
    </header>
  );
}
