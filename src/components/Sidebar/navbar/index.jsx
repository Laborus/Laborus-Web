import React, { useState } from "react";
import { FaRegUser, FaRegStar } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineChatAlt } from "react-icons/hi";
import { GoHome } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { PostModal } from "../../Post/createPost";
import ProfileSection from "./profile";
import { LogoutModal } from "./logout";

export default function NavBar() {
  const [postModal, setPostModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <img src="/laborus-logotipo-42x42.png" alt="Logotipo Laborus" />
        </div>

        <nav className={styles.navMenu}>
          <NavLinkItem to="/" icon={<GoHome />} text="Página inicial" />
          <NavLinkItem to="/connections" icon={<FaRegUser />} text="Conexões" />
          <NavLinkItem to="/jobs" icon={<MdWorkOutline />} text="Vagas" />
          <NavLinkItem to="/chats" icon={<HiOutlineChatAlt />} text="Conversas" />
          <NavLinkItem to="/challenges" icon={<FaRegStar />} text="Desafios" />
          <NavLinkItem
            to="/notifications"
            icon={<IoMdNotificationsOutline />}
            text="Notificações"
            extraText={<span className={styles.extraText}>2</span>}
          />
        </nav>

        <button className={styles.btnCreatePost} onClick={() => setPostModal(true)}>
          Criar publicação
        </button>

        <ProfileSection />
        {postModal && <PostModal onClose={() => setPostModal(false)} />}
        {logoutModal && <LogoutModal onClose={() => setLogoutModal(false)} />}
      </aside>
    </>
  );
}

const NavLinkItem = ({ to, icon, text, extraText }) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? `${styles.navItem} ${styles.navItemActive}` : styles.navItem)}
  >
    {icon}
    {text}
    {extraText && <span className={styles.extraText}>{extraText}</span>}
  </NavLink>
);
