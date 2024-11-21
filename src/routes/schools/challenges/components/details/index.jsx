import React from "react";
import ProfileInfo from "../profile";

import styles from "./details.module.css";
import StudentsHighlight from "../studentHighlight";
import { MdOutlineSchool } from "react-icons/md";
import ChallengesListSchool from "../challengesListSchool";
const challenges = [
  {
    name: "Equação de 2º grau com Python",
    image: "/user-laborus.jpeg",
    institution: "Análise e Desenvolvimento de Sistemas",
    difficulty: "easy",
    points: 20,
  },
];

export default function SubmissionsSideBar() {
  return (
    <aside className={styles.profileContent}>
      {/* <div className={styles.coverPhoto}>
        <img src="/post-example-2.jpeg" alt="Cover Photo" />
      </div>
      <ProfileInfo /> */}
      <StudentsHighlight
        title="Alunos destaques no seu Campus"
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
            info: "120 pontos",
          },
          {
            image: "/user-laborus.jpeg",
            name: "Rogério Azevedo",
            info: "115 pontos",
          },
        ]}
      />
      <ChallengesListSchool items={challenges} />
    </aside>
  );
}
