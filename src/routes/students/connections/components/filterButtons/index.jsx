import styles from "./FilterButtons.module.css";

export default function FilterButtons({ activeFilter, onFilterClick }) {
  const filters = [
    { label: "Estudantes", value: "students" },
    { label: "Empresas", value: "companies" },
    { label: "Instituições", value: "institutions" },
  ];

  return (
    <div className={styles.filterButtonsContainer}>
      {filters.map((filter) => (
        <button
          key={filter.value}
          className={`${styles.filterButton} ${
            activeFilter === filter.value ? styles.filterButtonActive : ""
          }`}
          onClick={() => onFilterClick(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
