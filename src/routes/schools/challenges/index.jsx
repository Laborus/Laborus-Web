import SearchBar from "../../../components/SearchBar";
import ChallengesSideBar from "../../students/challenges/components/details";
import styles from "./style.module.css";
import SubmissionSchool from "./components/submissionsList";
import SubmissionsSideBar from "./components/details";

const challenges = [
  {
    name: "Equação de 2º grau com Python",
    image: "/user-laborus.jpeg",
    institution: "Análise e Desenvolvimento de Sistemas",
    points: 20,
    student: "João Pedro",
  },
  {
    name: "Equação de 2º grau com Python",
    image: "/user-laborus.jpeg",
    institution: "Análise e Desenvolvimento de Sistemas",
    points: 20,
    student: "João Pedro",

  },
];

export default function ChallengesPageSchool() {
  
  return (
    <div className={styles.challengeContainer}>
      <div className="chat-sidebar">
        <header className="chat-sidebar-header">
          <h1 className="chat-title">Desafios</h1>
          <SearchBar />
        </header>

        <SubmissionSchool items={challenges} />
      </div>
      <SubmissionsSideBar />
    </div>
  );
}
