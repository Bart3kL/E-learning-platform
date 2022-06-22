import { Link } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import CategoryCard from '../../components/Phrases/CategoryCard';
import styles from './PhrasePage.module.css';

const PhrasesPage = ({ phrases }) => {
  return (
    <div className="pageContainer">
      <Header
        header="Wybierz kategorię"
        text="Zwroty są podzielone na kategorie."
      />
      <div className="cardContainer">
        <ul className="cards">
          {phrases.map((phrase) => (
            <li key={phrase.id}>
              <Link
                to={`./${phrase.id}`}
                className={styles.phraseCardLink}
              >
                <CategoryCard phrase={phrase} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhrasesPage;
