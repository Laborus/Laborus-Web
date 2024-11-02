import React from "react";
import { FaClock, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import ProfileInfo from "../profile";

import styles from "./details.module.css";
import StudentsHighlight from "../studentHighlight";
import { MdOutlineSchool } from "react-icons/md";
import SubmissionsList from "../submissionsList";
const challenges = [
  {
    name: "Equação de 2º grau com Python",
    image: "/user-laborus.jpeg",
    institution: "Análise e Desenvolvimento de Sistemas",
    difficulty: "easy",
    buttonLabel: "+ Adicionar",
  },
];

export default function ChallengesSideBar() {
  return (
    <aside className={styles.profileContent}>
      <div className={styles.coverPhoto}>
        <img src="/post-example-2.jpeg" alt="Cover Photo" />
      </div>
      <ProfileInfo />
      <StudentsHighlight
          title="Alunos destaques"
          icon={<MdOutlineSchool />}
          students={[
            {
              image: "/user-laborus.jpeg",
              name: "Rogério Azevedo",
              info: "125 pontos",
            },
            {
              image: "/user-laborus.jpeg",
              name: "Rogério Azevedo",
              info: "125 pontos",
            },
            {
              image: "/user-laborus.jpeg",
              name: "Rogério Azevedo",
              info: "125 pontos",
            },
          ]}
        />
      <SubmissionsList items={challenges}/>
    </aside>
  );
}
