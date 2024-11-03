import React, { useState } from "react";
import { FaRegUser, FaRegStar } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineChatAlt } from "react-icons/hi";
import { GoHome } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import { PostModal } from "../../Post/createPost";
import ProfileSection from "./profile";
import { LogoutModal } from "./logout";

export default function NavBar({ role }) {
  const [postModal, setPostModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const location = useLocation();

  // Caminho base construído a partir da role passada por props.
  const basePath = `/${role}`;

  // Menu de navegação baseado na role
  const navItems = [
    { path: `${basePath}`, icon: <GoHome />, text: "Página inicial" },
    { path: `${basePath}/connections`, icon: <FaRegUser />, text: "Conexões" },
    { path: `${basePath}/jobs`, icon: <MdWorkOutline />, text: "Vagas" },
    { path: `${basePath}/chats`, icon: <HiOutlineChatAlt />, text: "Conversas" },
    { path: `${basePath}/challenges`, icon: <FaRegStar />, text: "Desafios" },
    { path: `${basePath}/notifications`, icon: <IoMdNotificationsOutline />, text: "Notificações", extraText: 2 }
  ];

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <img src="/laborus-logotipo-42x42.png" alt="Logotipo Laborus" />
        </div>

        <nav className={styles.navMenu}>
          {navItems.map((item) => (
            <NavLinkItem
              key={item.path}
              to={item.path}
              icon={item.icon}
              text={item.text}
              extraText={item.extraText}
              isActive={location.pathname === item.path}
            />
          ))}
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

const NavLinkItem = ({ to, icon, text, extraText, isActive }) => (
  <NavLink
    to={to}
    className={isActive ? `${styles.navItem} ${styles.navItemActive}` : styles.navItem}
  >
    {icon}
    {text}
    {extraText && <span className={styles.extraText}>{extraText}</span>}
  </NavLink>
);
