import React, { useState } from "react";
import { ProfileDropdown } from "../../Modal/profile";
import { LogoutModal } from "../../Modal/logout";
import './style.css';
import { PostModal } from "../../Modal/post";

export default function NavBar() {
  const [notificationDropdown, setNotificationDropdown] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="/laborus-logotipo-42x42.png" alt="Logotipo Laborus" />
      </div>

      <nav className="nav-menu">
        <NavItem icon="/assets/vectors/iconamoon_home.svg" text="Página inicial" />
        <NavItem icon="/assets/vectors/connections-icon.svg" text="Conexões" />
        <NavItem icon="/assets/vectors/heroicons-outline_chat-alt.svg" text="Vagas" />
        <NavItem icon="/assets/vectors/vector_507_x2.svg" text="Conversas" />
        <NavItem text="Desafios" />
        <div className="nav-item notifications" onClick={() => setNotificationDropdown(!notificationDropdown)}>
          <img src="/assets/vectors/notification-icon.svg" alt="Notificações" />
          Notificações
          <span className="notification-count-item">2</span>
        </div>
      </nav>

      <button className="btn-create-post" onClick={() => setPostModal(true)}>
        Criar publicação
      </button>

      {postModal && <PostModal onClose={() => setPostModal(false)} />}
      {profileDropdown && <ProfileDropdown />}
      {logoutModal && <LogoutModal onClose={() => setLogoutModal(false)} />}
    </aside>
  );
}

const NavItem = ({ href, icon, text }) => (
    <a href={href} className="nav-item">
      <img src={icon} alt={text} />
      {text}
    </a>
  );