import ScienceNav from './ScienceNav';

import styles from './RepeatWords.module.css';
import { useState } from 'react';

const RepeatWords = () => {
  const [checkAnswer, setCheckAnswer] = useState(false);
  const checkAnswerHandler = () => {
    setCheckAnswer(true);
  };
  return (
    <div className="science">
      <ScienceNav />
      <section className="scienceContainer">
        <div className={styles.repeatWord}>
          <h2 className={styles.repeatAmount}>Powtórki: 45</h2>
          <div className={styles.repeatWordName}>
            <span className={styles.word}>siostra</span>
          </div>

          {checkAnswer ? (
            <div
              className={styles.repeatWordName}
              placeholder="tłumaczenie..."
            ></div>
          ) : (
            <textarea
              className={styles.repeatWordName}
              placeholder="tłumaczenie..."
            ></textarea>
          )}
          {checkAnswer ? (
            <div className={styles.check}>
              <button className={styles.qualityBtn1 + ' ' + styles.qualityBtn}>
                Źle
              </button>
              <p className={styles.fastClick}>klawisz 1</p>
              <button className={styles.qualityBtn2 + ' ' + styles.qualityBtn}>
                Średnio
              </button>
              <p className={styles.fastClick}>klawisz 2</p>
              <button className={styles.qualityBtn3 + ' ' + styles.qualityBtn}>
                Dobrze
              </button>
              <p className={styles.fastClick}>klawisz 3</p>
            </div>
          ) : (
            <div className={styles.check}>
              <button className={styles.checkBtn}>Podpowiedz literę</button>
              <p className={styles.fastClick}>klawisz space</p>
              <button className={styles.checkBtn} onClick={checkAnswerHandler}>
                Sprawdź odpowiedź
              </button>
              <p className={styles.fastClick}>klawisz enter</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default RepeatWords;
