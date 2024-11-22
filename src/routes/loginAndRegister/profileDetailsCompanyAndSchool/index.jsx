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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulação de carregamento de municípios
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Formulário enviado!");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    } finally {
      setLoading(false);
    }
  };

  const backButtonUrl = "/";

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
            label="Município"
            options={municipios}
            selectedValue={selectedMunicipio}
            onSelectChange={setSelectedMunicipio}
            ariaLabel="Selecione o município"
          />
          <AboutSection
            about={about}
            charCount={charCount}
            onAboutChange={handleAboutChange}
          />
          <SubmitButton
            disabled={!selectedMunicipio || !about || loading}
            label={loading ? "Enviando..." : "Enviar"}
          />
        </form>
      </GroupBox>
      <SideBanner />
      {loading && <LoadingOverlay />}
    </Container>
  );
}

// import React, { useState, useEffect } from "react";
// import Logo from "../components/logo";
// import BackButton from "../components/backButton";
// import Title from "../components/title";
// import SubmitButton from "../components/submitButton";
// import LoadingOverlay from "../components/loadingOverlay";
// import Container from "../components/container";
// import GroupBox from "../components/groupBox";
// import SideBanner from "../components/sideBanner";

// import ImageUpload from "../components/ImageUpload";
// import LocationSelect from "../components/LocationSelect";
// import AboutSection from "../components/AboutSection";

// export default function ProfileDetails() {
//   const [selectedImage, setSelectedImage] = useState(
//     "src/assets/images/select-image.png"
//   );
//   const [about, setAbout] = useState("");
//   const [charCount, setCharCount] = useState(0);
//   const [municipios, setMunicipios] = useState([]);
//   const [selectedMunicipio, setSelectedMunicipio] = useState("");

//   useEffect(() => {
//     // Carregamento de municípios (simulado)
//     setMunicipios(["São Paulo", "Rio de Janeiro", "Belo Horizonte"]);
//   }, []);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => setSelectedImage(event.target.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleAboutChange = (e) => {
//     const text = e.target.value;
//     setAbout(text);
//     setCharCount(text.length);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Formulário enviado!");
//   };

//   const backButtonUrl = "/home"; // Pode ser alterado dinamicamente

//   return (
//     <Container>
//       <GroupBox>
//         <Logo />
//         <BackButton href={backButtonUrl} />
//         <Title
//           title="Detalhes do perfil"
//           details="Escolha uma foto para o seu perfil e adicione detalhes ao seu usuário."
//         />
//         <form id="profile-form" onSubmit={handleSubmit}>
//           <ImageUpload
//             selectedImage={selectedImage}
//             onImageChange={handleImageChange}
//           />
//           <LocationSelect
//             municipios={municipios}
//             selectedMunicipio={selectedMunicipio}
//             onSelectChange={setSelectedMunicipio}
//           />
//           <AboutSection
//             about={about}
//             charCount={charCount}
//             onAboutChange={handleAboutChange}
//           />
//           <SubmitButton disabled={!selectedMunicipio || !about} />
//         </form>
//       </GroupBox>
//       <SideBanner />
//       <LoadingOverlay />
//     </Container>
//   );
// }
