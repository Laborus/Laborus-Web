// components/LocationSelect.jsx
import React from "react";
import styles from "./style.module.css";

export default function LocationSelect({
  municipios,
  selectedMunicipio,
  onSelectChange,
}) {
  return (
    <div className={styles.locationSelect}>
      <select
        className={styles.inputSelect}
        value={selectedMunicipio}
        onChange={(e) => onSelectChange(e.target.value)}
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
  );
}
