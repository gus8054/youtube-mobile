import styles from "./navbar.module.css";
import { BsCompass } from "react-icons/bs";
import { navbarItems } from "../../constants";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>
        <li className={styles.nav__li}>
          <Link to="#" className={styles["nav__icon"]}>
            <BsCompass />
          </Link>
        </li>

        {navbarItems.map(({ id, name }) => (
          <li key={id} className={styles.nav__li}>
            <Link to="#" className={styles["nav__icon"]}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
