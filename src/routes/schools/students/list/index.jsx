import React, { useState } from "react";
import styles from "./style.module.css";
import StudentRow from "../item";

export default function StudentList() {
  const [students, setStudents] = useState([
    { id: "#001234", name: "Brian Corner", cpf: "534.423.121-12", email: "usuario.24@fatec.sp.gov.br", course: "Logística", location: "Carapicuíba" },
    { id: "#001235", name: "Brian Corner", cpf: "534.423.121-12", email: "usuario.24@fatec.sp.gov.br", course: "AMS", location: "Carapicuíba" },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelect = (id) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedIds.length === students.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(students.map((student) => student.id));
    }
  };

  const handleDeleteSelected = () => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => !selectedIds.includes(student.id))
    );
    setSelectedIds([]);
  };

  return (
    <div className={styles.studentListContainer}>
      <header className={styles.header}>
        <h2>Estudantes</h2>
        <div className={styles.actions}>
          <input className={styles.searchBox} type="text" placeholder="Pesquisar Estudantes" />
          <button className={styles.addButton}>+ Adicionar Novo</button>
          <button className={styles.deleteAllButton} onClick={handleDeleteSelected}>
            Deletar Selecionados
          </button>
        </div>
      </header>
      <table className={styles.studentTable}>
        <thead>
          <tr>
            <th><input type="checkbox" onChange={handleSelectAll} checked={selectedIds.length === students.length} /></th>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>E-mail</th>
            <th>Curso</th>
            <th>Localização</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              isSelected={selectedIds.includes(student.id)}
              onSelect={() => toggleSelect(student.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
