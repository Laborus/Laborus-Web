import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import { FaArrowLeft } from "react-icons/fa";

export default function ProfileDetails() {
  const [selectedImage, setSelectedImage] = useState(
    "src/assets/images/select-image.png"
  );
  const [about, setAbout] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [municipios, setMunicipios] = useState([]);
  const [selectedMunicipio, setSelectedMunicipio] = useState("");

  useEffect(() => {
    // Simulação de carregamento de municípios (pode ser trocado por uma requisição real)
    setMunicipios(["São Paulo", "Rio de Janeiro", "Belo Horizonte"]);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setSelectedImage(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAboutChange = (e) => {
    const text = e.target.value;
    setAbout(text);
    setCharCount(text.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado!");
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
        <h1 className={styles.title}>Detalhes do perfil</h1>
        <p className={styles.titleDetails}>
          Escolha uma foto para o seu perfil e adicione detalhes ao seu usuário.
        </p>
        <form id="profile-form" onSubmit={handleSubmit}>
          <div className={styles.imageUpload}>
            <label htmlFor="profileImage">
              <img
                id="profileImagePreview"
                src={selectedImage}
                alt="Imagem de perfil"
              />
            </label>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>

          <div className={styles.locationSelect}>
            <select
              className={styles.inputSelect}
              id="municipiosSelect"
              value={selectedMunicipio}
              onChange={(e) => setSelectedMunicipio(e.target.value)}
              aria-label="Localização"
            >
              <option value="" disabled>
                Localização
              </option>
              {municipios.map((municipio) => (
                <option key={municipio} value={municipio}>
                  {municipio}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.aboutSection}>
            <textarea
              id="about"
              value={about}
              onChange={handleAboutChange}
              placeholder="Sobre"
              maxLength="200"
            />
            <div id={styles["charCount"]}>{charCount}/200</div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Continuar
          </button>
        </form>
      </div>
      <div className={styles.sideBanner}></div>
      <div id="loadingOverlay" className={styles.loadingOverlay}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
}
