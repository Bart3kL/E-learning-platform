import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Spinner from '../Layout/Spinner';
import ScienceNav from './ScienceNav';
import styles from './Flashcards.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Flashcards = () => {
  let [currentWordIndex, setCurrentWordIndex] = useState(0);
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
        });

        setWords(loadedWords);
      }
      setSpinner(false);
    })();
  }, []);

  const [showWord, setShowWord] = useState(false);

  let animation = showWord && styles.animationCard;
  let animation2 = !showWord && styles.animationCard2;
  const showWordHandler = () => {
    setShowWord(!showWord);
  };
  const previousWordHandler = () => {
    setCurrentWordIndex(currentWordIndex === 0 ? 0 : --currentWordIndex);
  };
  const nextWordHandler = () => {
    setCurrentWordIndex(
      currentWordIndex === words.length - 1
        ? words.length - 1
        : ++currentWordIndex
    );
  };
  return (
    <div className="science">
      <ScienceNav />
      <section className="scienceContainer">
        <div className={styles.flashcardsHeader}>
          <h2 className={styles.flashcardsHeaderName}>Twoje fiszki</h2>
          <p className={styles.flashcardsHeaderText}>
            Fiszki pochodzą z twojego słownika.
          </p>
        </div>
        <div className={styles.flashcards}>
          {showWord ? (
            <div className={`${styles.flascard} ${animation}`}>
              <h3 className={styles.flashcardHint} onClick={showWordHandler}>
                Aby zobaczy słowo kliknij w okno.
              </h3>
              <div className={styles.flashcardWord} onClick={showWordHandler}>
                {!spinner ? words[currentWordIndex].translation : <Spinner />}
              </div>

              <div className={styles.flashcardChangeWord}>
                <div className={styles.flashcardChange}>
                  <AiOutlineArrowLeft onClick={previousWordHandler} />
                </div>
                <div className={styles.flascardAmount}>{`${
                  currentWordIndex + 1
                }/${words.length}`}</div>
                <div className={styles.flashcardChange}>
                  <AiOutlineArrowRight onClick={nextWordHandler} />
                </div>
              </div>
            </div>
          ) : (
            <div className={`${styles.flascard} ${animation2}`}>
              <h3 className={styles.flashcardHint} onClick={showWordHandler}>
                Aby zobaczy tłumaczenie kliknij w okno.
              </h3>
              <div className={styles.flashcardWord} onClick={showWordHandler}>
                {!spinner ? words[currentWordIndex].item : <Spinner />}
              </div>
              <div className={styles.flashcardChangeWord}>
                <div className={styles.flashcardChange}>
                  <AiOutlineArrowLeft onClick={previousWordHandler} />
                </div>
                <div className={styles.flascardAmount}>{`${
                  currentWordIndex + 1
                }/${words.length}`}</div>
                <div className={styles.flashcardChange}>
                  <AiOutlineArrowRight onClick={nextWordHandler} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Flashcards;
