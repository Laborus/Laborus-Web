import React, { useState, useEffect } from "react";
import Logo from "../components/logo";
import BackButton from "../components/backButton";
import Title from "../components/title";
import SubmitButton from "../components/submitButton";
import LoadingOverlay from "../components/loadingOverlay";
import Container from "../components/container";
import GroupBox from "../components/groupBox";
import SideBanner from "../components/sideBanner";
import ImageUpload from "../components/imageUpload";
import InputSelect from "../components/inputSelect";
import AboutSection from "../components/aboutSection";
import defaultImage from "../../../assets/images/select-image.png";

export default function ProfileDetails() {
  const [selectedImage, setSelectedImage] = useState(defaultImage);
  const [about, setAbout] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [municipios, setMunicipios] = useState([]);
  const [selectedMunicipio, setSelectedMunicipio] = useState("");
  const [instituicoes, setInstituicoes] = useState([]);
  const [selectedInstituicao, setSelectedInstituicao] = useState("");
  const [cursos, setCursos] = useState([]);
  const [selectedCurso, setSelectedCurso] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulação de dados carregados
    setInstituicoes(["Universidade A", "Universidade B", "Instituto C"]);
    setCursos(["Engenharia", "Administração", "Ciências da Computação"]);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Formulário enviado!");
      console.log({
        municipio: selectedMunicipio,
        instituicao: selectedInstituicao,
        curso: selectedCurso,
        about,
      });
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    } finally {
      setLoading(false);
    }
  };

  const backButtonUrl = "/home";

  return (
    <Container>
      <GroupBox>
        <Logo />
        <BackButton href={backButtonUrl} />
        <Title
          title="Detalhes do perfil"
          details="Escolha uma foto para o seu perfil e adicione detalhes ao seu usuário."
        />
        <form id="profile-form" onSubmit={handleSubmit}>
          <ImageUpload
            selectedImage={selectedImage}
            onImageChange={handleImageChange}
          />

          <InputSelect
            label="Instituição de Ensino"
            options={instituicoes}
            selectedValue={selectedInstituicao}
            onSelectChange={setSelectedInstituicao}
            ariaLabel="Selecione a instituição de ensino"
          />

          <InputSelect
            label="Curso"
            options={cursos}
            selectedValue={selectedCurso}
            onSelectChange={setSelectedCurso}
            ariaLabel="Selecione o curso"
          />

          <AboutSection
            about={about}
            charCount={charCount}
            onAboutChange={handleAboutChange}
          />

          <SubmitButton
            disabled={
              !selectedMunicipio ||
              !selectedInstituicao ||
              !selectedCurso ||
              !about ||
              loading
            }
            label={loading ? "Enviando..." : "Enviar"}
          />
        </form>
      </GroupBox>
      <SideBanner />
      {loading && <LoadingOverlay />}
    </Container>
  );
}
