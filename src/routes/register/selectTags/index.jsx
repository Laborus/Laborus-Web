import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import { FaArrowLeft } from "react-icons/fa";

export default function SelectTags() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

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

  const isSelected = (value) => selectedTags.includes(value);

  const handleSubmit = () => {
    console.log("Tags selecionadas:", selectedTags);
    // Aqui você pode adicionar a lógica para enviar os dados ou redirecionar o usuário.
  };

  return (
    <div className={styles.container}>
      <div className={styles.groupBox}>
        <div className={styles.logo}>
          <img src="/laborus-logotipo-42x42.png" alt="Logotipo Laborus" />
        </div>
        <a href="#" className={styles.backButton}>
          <div>
            <FaArrowLeft />
          </div>
          Voltar
        </a>
        <h1 className={styles.title}>Selecione suas tags</h1>
        <p className={styles.titleDetails}>
          Escolha <strong>3</strong> estilos/interesses que mais combinam com
          você - Poderá alterá-los mais tarde.
        </p>
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
        <button
          type="button"
          className={styles.submitButton}
          onClick={handleSubmit}
          disabled={!isButtonEnabled}
        >
          Continuar
        </button>
      </div>
      <div className={styles.sideBanner}></div>
      <div id="loading-overlay" className={styles.loadingOverlay}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
}
