import styles from './Header.module.css'

const Header = (props) => {
  return (
    <section className={styles.header}>
      <h3 className={styles.heading}>{props.header}</h3>
      <p className={styles.text}>{props.text}</p>
    </section>
  );
};

export default Header;
