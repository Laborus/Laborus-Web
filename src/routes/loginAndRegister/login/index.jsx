import React from "react";
import Container from "../components/container";
import GroupBox from "../components/groupBox";
import Logo from "../components/logo";
import Title from "../components/title";
import SubmitButton from "../components/submitButton";
import LoadingOverlay from "../components/loadingOverlay";
import SideBanner from "../components/sideBanner";
import InputField from "../components/inputField";
import PasswordField from "../components/passwordField";
import styles from "./style.module.css";

export default function Login() {
  const [isLoading, setLoading] = React.useState(false); // Estado de carregamento

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "O campo de e-mail não pode estar vazio.";
    if (!emailRegex.test(value)) return "Por favor, insira um e-mail válido.";
    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simula carregamento
  };

  return (
    <Container>
      <GroupBox>
        <Logo />

        <form onSubmit={handleSubmit}>
          <Title
            title="Bem-vindo(a) de volta!"
            details="É bom vê-lo(a) novamente! Digite suas informações."
          />

          <InputField
            type="email"
            name="email"
            placeholder="E-mail"
            validate={validateEmail}
          />

          <PasswordField />

          <a href="#" className={styles.forgotPassword}>
            Esqueceu a senha?
          </a>

          <SubmitButton disabled={isLoading} />

          <p className={styles.registerLink}>
            Não possui conta ainda? <a href="#">Cadastre-se.</a>
          </p>
        </form>
      </GroupBox>
      <SideBanner />
      {isLoading && <LoadingOverlay />}
    </Container>
  );
}
