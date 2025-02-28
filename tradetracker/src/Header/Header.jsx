import { BrowserRouter as Link } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/tabel">
              <button>Table</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
