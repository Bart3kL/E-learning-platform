import { useState, useEffect } from 'react';
import Spinner from '../../Layout/Spinner';
import AddedWordCard from './AddedWordCard';
import styles from './AddedWords.module.css';

const AddedWords = ({ newFetch }) => {
  const [spinner, setSpinner] = useState(false);
  const [words, setWords] = useState([]);
  useEffect(() => {
    setSpinner(true);
    (async function () {
      const response = await fetch(
        `https://english-page-7aa3f-default-rtdb.europe-west1.firebasedatabase.app/addedWords.json`
      );
      const data = await response.json();

      const words = [];

      for (const key in data) {
        words.push({
          id: key,
          word: data[key].word,
          translation: data[key].translation,
        });
        setWords(words);
      }
      setSpinner(false);
    })();
  }, [newFetch]);
  return (
    <section className={styles.addedWords}>
      {spinner ? (
        <Spinner />
      ) : (
        <ul className="cards">
          {words.map((word) => (
            <li key={word.word} className={styles.wordCard}>
              <AddedWordCard word={word} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default AddedWords;
