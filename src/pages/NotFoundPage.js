import Header from '../components/Layout/Header';
import SpinnerLoadPage from '../components/Layout/SpinnerLoadPage';
import styles from './NotFoundPage.module.css';
import { useState } from 'react';

const NotFoundPage = () => {
  const [spinner, setSpinner] = useState(true);

  setTimeout(() => {
    setSpinner(false);
  }, 500);
  return (
    <>
      {spinner ? (
        <SpinnerLoadPage />
      ) : (
        <section className={styles.notFoundContainer}>
          <Header
            header="Ta strona nie istnieje"
            text="Nie znaleziono takiej strony."
          />
          <section className={styles.notFound}>
            <h2>404</h2>
            <h3>Nie znaleziono</h3>
            <p>Żądany zasób nie został znaleziony na tym serwerze!</p>
          </section>
        </section>
      )}
    </>
  );
};
export default NotFoundPage;
