import styles from "./styles.module.scss";
import { SearchIcon } from "@heroicons/react/outline";

const Search = () => {
  return (
    <div className={styles.searchInputContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Ingrese Personaje"
      />
      <SearchIcon className={styles.icon} />
    </div>
  );
};

export default Search;
