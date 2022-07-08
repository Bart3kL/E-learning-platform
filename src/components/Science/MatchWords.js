import ScienceNav from './ScienceNav';
import styles from './MatchWords.module.css';
import { useEffect, useState } from 'react';
import Spinner from '../Layout/Spinner';
const MatchWords = () => {
  const [spinner, setSpinner] = useState(true);
  const [words, setWords] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://english-page-7aa3f-default-rtdb.europe-west1.firebasedatabase.app/addedWords.json`
      );

      const data = await response.json();

      const loadedWords = [];

      for (const key in data) {
        loadedWords.push({
          item: data[key].item,
          translation: data[key].translation,
          index: data[key].index,
        });

        setWords(loadedWords);
      }
      setSpinner(false);
    })();
  }, []);

 console.log(words);
  return (
    <div className="science">
      <ScienceNav />
      {spinner ? (
        <Spinner />
      ) : (
        <section className={styles.matchwords}>
   
        </section>
      )}
    </div>
  );
};

export default MatchWords;
