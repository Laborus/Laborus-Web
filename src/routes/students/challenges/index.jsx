import { useState } from "react";
import SearchBar from "../../../components/SearchBar";
import FilterButtonsChallenge from "./filterButton";
import ChallengesList from "./challengesList";
import StudentMetrics from "../../../components/Sidebar/metrics";


const challenges = [
  {
    name: "Equação de 2º grau com Python",
    image: "src/assets/images/user-laborus.jpeg",
    institution: "Análise e Desenvolvimento de Sistemas",
    points: 20,
    difficulty: "easy",
    buttonLabel: "+ Adicionar",
  },
];

export default function ChallengesPage() {
  const [activeFilter, setActiveFilter] = useState("easy");

  const filteredChallenges = challenges.filter(
    (challenge) => challenge.difficulty === activeFilter
  );

  return (
    <section className="wrapper">
      <aside className="chat-sidebar">
        <header className="chat-sidebar-header">
          <h1 className="chat-title">Conexões</h1>
          <SearchBar />
          <FilterButtonsChallenge activeFilter={activeFilter} onFilterClick={setActiveFilter} />
        </header>

        <ChallengesList items={filteredChallenges} />
      </aside>
      <StudentMetrics />
    </section>
  );
}
