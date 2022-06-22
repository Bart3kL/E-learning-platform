import { NavLink } from 'react-router-dom';
import Header from '../components/Layout/Header';
import LevelCard from '../components/Dictionary/LevelCard';
import { useSelector } from 'react-redux';
import styles from './DictionaryPage.module.css';
import Spinner from '../components/Layout/Spinner';

const DictionaryPage = ({ level }) => {
  const spinner = useSelector((state) => state.spinner.activation);
  return (
    <div className="pageContainer">
      <Header
        header="Wybierz poziom"
        text="Słownik podzielony jest na poziomy."
      />
      {spinner ? (
        <Spinner />
      ) : (
        <div className="cardContainer">
          <ul className={styles.levelCards}>
            {level.map((level) => (
              <li key={level.level} className={styles.levelCard}>
                <NavLink to={`/slownik/${level.level}`}>
                  <LevelCard level={level.level} img={level.image} />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DictionaryPage;
