import React, { useState } from "react";
import { ProfileDropdown } from "../../Modal/profile";
import { LogoutModal } from "../../Modal/logout";
import { FaRegUser, FaRegStar } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineChatAlt } from "react-icons/hi";
import { GoHome } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import './style.css';
import { PostModal } from "../../Modal/post";

export default function NavBar() {
  const [notificationDropdown, setNotificationDropdown] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <img src="/laborus-logotipo-42x42.png" alt="Logotipo Laborus" />
        </div>

        <nav className="nav-menu">
          <NavLinkItem to="/" icon={<GoHome />} text="Página inicial" />
          <NavLinkItem to="/connections" icon={<FaRegUser />} text="Conexões" />
          <NavLinkItem to="/jobs" icon={<MdWorkOutline />} text="Vagas" />
          <NavLinkItem to="/chats" icon={<HiOutlineChatAlt />} text="Conversas" />
          <NavLinkItem to="/challenges" icon={<FaRegStar />} text="Desafios" />
          <NavLinkItem
            to="/notifications"
            icon={<IoMdNotificationsOutline />}
            text="Notificações"
            extraText={<span className="notification-count-item">2</span>}
          />
        </nav>

        <button className="btn-create-post" onClick={() => setPostModal(true)}>
          Criar publicação
        </button>

        {postModal && <PostModal onClose={() => setPostModal(false)} />}
        {profileDropdown && <ProfileDropdown />}
        {logoutModal && <LogoutModal onClose={() => setLogoutModal(false)} />}
      </aside>

      {/* This will render the content of the current route */}
    </>
  );
}

const NavLinkItem = ({ to, icon, text, extraText }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive ? "nav-item active" : "nav-item"
    }
  >
    {icon}
    {text}
    {extraText && <span className="extra-text">{extraText}</span>}
  </NavLink>
);
