// Register.jsx
import React, { useState, useEffect } from "react";
import { FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa"; // Importando ícones
import Container from "../components/container";
import GroupBox from "../components/groupBox";
import Logo from "../components/logo";
import Title from "../components/title";
import SubmitButton from "../components/submitButton";
import LoadingOverlay from "../components/loadingOverlay";
import SideBanner from "../components/sideBanner";
import BackButton from "../components/backButton";
import TermsAndPrivacy from "../components/termsAndPrivacy"; // Importando o novo componente
import styles from "./style.module.css";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    website: "",
    phone: "",
    email: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Verifica se todos os campos obrigatórios estão preenchidos
    const { website, phone, email } = formData;
    setIsFormValid(
      website.trim() !== "" && phone.trim() !== "" && email.trim() !== ""
    );
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "phone" ? formatPhone(value) : value,
    }));
  };

  const formatPhone = (phone) => {
    // Aplica uma máscara ao telefone no formato (XX) XXXXX-XXXX
    return phone
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulando uma requisição com timeout
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Container>
      <GroupBox>
        <Logo />
        <BackButton href="#" />
        <Title
          title="Links de Contato"
          details="Preencha os campos abaixo para adicionar os links de contato ao seu perfil."
        />
        <form id="register-form" onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <div className={styles.boxIcon}>
              <FaGlobe className={styles.icon} />
            </div>
            <input
              type="url"
              name="website"
              placeholder="URL do seu site"
              value={formData.website}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.inputBox}>
            <div className={styles.boxIcon}>
              <FaPhone className={styles.icon} />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Número de telefone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.inputBox}>
            <div className={styles.boxIcon}>
              <FaEnvelope className={styles.icon} />
            </div>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <SubmitButton type="submit" disabled={!isFormValid || isLoading} />
        </form>

        <TermsAndPrivacy />
      </GroupBox>
      <SideBanner />
      {isLoading && <LoadingOverlay />}
    </Container>
  );
}
