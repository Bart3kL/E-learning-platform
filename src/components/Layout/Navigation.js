import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.headerLogo}>Edudor</h2>
      <nav className={styles.navigation}>
        <ul>
          <li>Nauka</li>
          <li>Słownik</li>
          <li>Gramatyka</li>
          <li>Zwroty</li>
          <li>Kontakt</li>
        </ul>
      </nav>
      <div className={styles.authBtns}>
        <button>Zaloguj się</button>
      </div>
    </header>
  );
};

export default Navigation;
