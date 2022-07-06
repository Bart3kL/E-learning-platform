import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import ScienceNav from './ScienceNav';
import styles from './Flashcards.module.css';
import { useState } from 'react';

const Flashcards = () => {
  const [showWord, setShowWord] = useState(false);
  const showWordHandler = () => {
    setShowWord(!showWord);
  };
  return (
    <div className="science">
      <ScienceNav />
      <section className="scienceContainer">
        <div className={styles.flashcardsHeader}>
          <h2 className={styles.flashcardsHeaderName}>Twoje fiszki</h2>
          <p className={styles.flashcardsHeaderText}>
            Fiszki pochodzą z twojego słownika, możesz je także dodać klikając +
            obok słowa.
          </p>
        </div>
        <div className={styles.flashcards}>
          {showWord ? (
            <div className={styles.flascard} onClick={showWordHandler}>
              <h3 className={styles.flashcardHint}>
                Aby zobaczy słowo kliknij w okno.
              </h3>
              <div className={styles.flashcardWord}>Skirt</div>
              <div className={styles.flashcardChangeWord}>
                <div className={styles.flashcardChange}>
                  <BsArrowLeftCircle />
                </div>
                <div className={styles.flashcardChange}>
                  <BsArrowRightCircle />
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.flascard} onClick={showWordHandler}>
              <h3 className={styles.flashcardHint}>
                Aby zobaczy tłumaczenie kliknij w okno.
              </h3>
              <div className={styles.flashcardWord}>Sukienka</div>
              <div className={styles.flashcardChangeWord}>
                <div className={styles.flashcardChange}>
                  <BsArrowLeftCircle />
                </div>
                <div className={styles.flashcardChange}>
                  <BsArrowRightCircle />
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
