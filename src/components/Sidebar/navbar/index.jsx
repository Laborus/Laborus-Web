import React, { useState } from "react";
import { ProfileDropdown } from "../../Modal/profile";
import { LogoutModal } from "../../Modal/logout";
import { FaRegUser, FaRegStar } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineChatAlt } from "react-icons/hi";
import { GoHome } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
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
        <NavItem icon={<GoHome />} text="Página inicial" />
        <NavItem icon={<FaRegUser />} text="Conexões" />
        <NavItem icon={<MdWorkOutline />} text="Vagas" />
        <NavItem icon={<HiOutlineChatAlt />} text="Conversas" />
        <NavItem icon={<FaRegStar />} text="Desafios" />
        <div className="nav-item notifications" onClick={() => setNotificationDropdown(!notificationDropdown)}>
          <IoMdNotificationsOutline />
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
      {icon}
      {text}
    </a>
  );