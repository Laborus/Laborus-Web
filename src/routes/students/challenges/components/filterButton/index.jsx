import styles from "./style.module.css";

export default function FilterButtonsChallenge({ activeFilter, onFilterClick }) {
  const filters = ["easy", "medium", "hard"]; 

  return (
    <div className={styles.filterButtonsContainer}>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`${styles.filterButton} ${activeFilter === filter ? styles.filterButtonActive : ""}`}
          onClick={() => onFilterClick(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}
