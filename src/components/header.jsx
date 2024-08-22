import styles from "./header.module.css";

import igniteLogo from "../assets/ignite-logo.png";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Ignite Logo" />
      <h1>
        <strong>Ingnite Feed</strong>
      </h1>
    </header>
  );
}
