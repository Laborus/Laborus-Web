// pages/AccountChoice.jsx
import React, { useState } from "react";
import Logo from "../components/logo";
import BackButton from "../components/backButton";
import Title from "../components/title";
import SubmitButton from "../components/submitButton";
import LoadingOverlay from "../components/loadingOverlay";
import Container from "../components/container";
import GroupBox from "../components/groupBox";
import SideBanner from "../components/sideBanner";
import OptionsList from "../components/optionsList";

export default function AccountChoice() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (value) => setSelectedOption(value);
  const handleSubmit = () => alert(`Opção selecionada: ${selectedOption}`);
  const backButtonUrl = "/"; // Pode ser alterado dinamicamente

  return (
    <Container>
      <GroupBox>
        <Logo />
        <BackButton href={backButtonUrl} />
        <Title
          title="Escolha a sua conta"
          details="Selecione a opção que corresponde ao tipo de conta que deseja."
        />
        <OptionsList
          selectedOption={selectedOption}
          onOptionClick={handleOptionClick}
        />
        <SubmitButton onClick={handleSubmit} disabled={!selectedOption} />
      </GroupBox>
      <SideBanner />
      <LoadingOverlay />
    </Container>
  );
}
