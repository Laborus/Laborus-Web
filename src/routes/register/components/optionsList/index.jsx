// components/OptionsList.jsx
import React from "react";
import OptionCard from "../optionCard";
import studentImage from "../../../../../src/assets/images/student-image.png";
import companyImage from "../../../../../src/assets/images/company-image.png";
import schoolImage from "../../../../../src/assets/images/school-image.png";
import styles from "./style.module.css";

export default function OptionsList({ selectedOption, onOptionClick }) {
  const options = [
    { label: "Estudante", value: "estudante", image: studentImage },
    { label: "Empresa", value: "empresa", image: companyImage },
    { label: "Instituição", value: "instituicao", image: schoolImage },
  ];

  return (
    <div className={styles.options}>
      {options.map((option) => (
        <OptionCard
          key={option.value}
          image={option.image}
          label={option.label}
          selected={selectedOption === option.value}
          onClick={() => onOptionClick(option.value)}
        />
      ))}
    </div>
  );
}
