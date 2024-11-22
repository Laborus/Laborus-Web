import React, { useState } from "react";
import styles from "./modal.module.css";

export default function JobModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: "",
    jobType: "",
    location: "",
    period: "",
    modality: "",
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: `#${Math.floor(Math.random() * 100000)}`, // ID aleatório
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
      createdAt: new Date().toISOString(),
    };
    onSave(newJob);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Cadastrar Nova Vaga</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Título</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Tipo</label>
            <input
              type="text"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Localização</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Período</label>
            <input
              type="text"
              name="period"
              value={formData.period}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Modalidade</label>
            <input
              type="text"
              name="modality"
              value={formData.modality}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Tags (separadas por vírgula)</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
            />
          </div>
          <div className={styles.actions}>
            <button type="submit" className={styles.saveButton}>
              Salvar
            </button>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
