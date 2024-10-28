import styles from "./style.module.css";

export default function FilterButtonsNotifications({ activeFilter, onFilterClick }) {
  const filters = ["all", "campus", "follows"]; 

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
