// pages/SelectTags.jsx
import React, { useState, useEffect } from "react";
import Container from "../components/container";
import GroupBox from "../components/groupBox";
import Logo from "../components/logo";
import BackButton from "../components/backButton";
import Title from "../components/title";
import SubmitButton from "../components/submitButton";
import SideBanner from "../components/sideBanner";
import LoadingOverlay from "../components/loadingOverlay";
import styles from "./style.module.css";

// Definição das tags disponíveis
const tags = [
  { value: "tecnologia", label: "Tecnologia" },
  { value: "estudar", label: "Estudar" },
  { value: "livros", label: "Livros" },
  { value: "financeiro", label: "Financeiro" },
  { value: "historia", label: "História" },
  { value: "robotica", label: "Robótica" },
  { value: "sociologia", label: "Sociologia" },
  { value: "matematica", label: "Matemática" },
];

export default function SelectTags() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // Verifica se o botão "Continuar" deve ser habilitado
  useEffect(() => {
    setIsButtonEnabled(selectedTags.length >= 1 && selectedTags.length <= 3);
  }, [selectedTags]);

  const handleTagClick = (value) => {
    if (selectedTags.includes(value)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== value));
    } else if (selectedTags.length < 3) {
      setSelectedTags([...selectedTags, value]);
    }
  };

  const handleSubmit = () => {
    console.log("Tags selecionadas:", selectedTags);
    // Lógica adicional para enviar ou redirecionar
  };

  const isSelected = (value) => selectedTags.includes(value);

  return (
    <Container>
      <GroupBox>
        <Logo />
        <BackButton href="#" />
        <Title
          title="Selecione suas tags"
          details="Escolha 3 estilos/interesses que mais combinam com você - Poderá alterá-los mais tarde."
        />
        <div className={styles.tagsContainer}>
          {tags.map((tag) => (
            <div
              key={tag.value}
              className={`${styles.tag} ${
                isSelected(tag.value) ? styles.selected : ""
              }`}
              onClick={() => handleTagClick(tag.value)}
            >
              {tag.label}
            </div>
          ))}
        </div>
        <SubmitButton
          onClick={handleSubmit}
          disabled={!isButtonEnabled}
          label="Continuar"
        />
      </GroupBox>
      <SideBanner />
      <LoadingOverlay />
    </Container>
  );
}
