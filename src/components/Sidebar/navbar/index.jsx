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

const getNavItemsForRole = (role) => {
  switch (role) {
    case "student":
      return [
        { path: `/${role}`, icon: <GoHome />, text: "Página inicial" },
        { path: `/${role}/connections`, icon: <FaRegUser />, text: "Conexões" },
        { path: `/${role}/jobs`, icon: <MdWorkOutline />, text: "Vagas" },
        { path: `/${role}/chats`, icon: <HiOutlineChatAlt />, text: "Conversas" },
        { path: `/${role}/challenges`, icon: <FaRegStar />, text: "Desafios" },
        { path: `/${role}/notifications`, icon: <IoMdNotificationsOutline />, text: "Notificações", extraText: 2 },
      ];
    case "school":
      return [
        { path: `/${role}`, icon: <GoHome />, text: "Página inicial" },
        { path: `/${role}/students`, icon: <FaRegUser />, text: "Gerenciar alunos" },
        { path: `/${role}/challenges`, icon: <FaRegStar />, text: "Gerenciar Desafios" },
        { path: `/${role}/notifications`, icon: <IoMdNotificationsOutline />, text: "Notificações", extraText: 2 },
      ];
    case "company":
      return [
        { path: `/${role}`, icon: <GoHome />, text: "Página inicial" },
        { path: `/${role}/jobs`, icon: <MdWorkOutline />, text: "Vagas" },
        { path: `/${role}/notifications`, icon: <IoMdNotificationsOutline />, text: "Notificações", extraText: 2 },

      ];
    default:
      return [{ path: `/error`, icon: <GoHome />, text: "Página inicial" }];
  }
};

export default function NavBar() {
  const [postModal, setPostModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const location = useLocation().pathname.split("/")[1];

  const navItems = getNavItemsForRole(location);

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
            />
          ))}
        </nav>

        <button
          className={styles.btnCreatePost}
          onClick={() => setPostModal(true)}
        >
          Criar publicação
        </button>

        <ProfileSection />
        {postModal && <PostModal onClose={() => setPostModal(false)} />}
        {logoutModal && <LogoutModal onClose={() => setLogoutModal(false)} />}
      </aside>
    </>
  );
}

const NavLinkItem = ({ to, icon, text, extraText }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${styles.navItem} ${styles.navItemActive}` : styles.navItem
      }
      end 
    >
      {icon}
      <span>{text}</span>
      {extraText && <span className={styles.extraText}>{extraText}</span>}
    </NavLink>
  );
};
