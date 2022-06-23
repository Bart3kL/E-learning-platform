import { NavLink } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import LevelCard from '../../components/Dictionary/LevelCard';
import styles from './DictionaryPage.module.css';

const DictionaryPage = ({ level }) => {
  return (
    <div className="pageContainer">
      <Header
        header="Wybierz poziom"
        text="Słownik podzielony jest na poziomy."
      />

      <div className="cardContainer">
        <ul className={styles.levelCards}>
          {level.map((level) => (
            <li key={level.level} className={styles.levelCard}>
              <NavLink to={`/slownik/${level.level}`} className='levelLink'>
                <LevelCard level={level.level} img={level.image} />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DictionaryPage;
