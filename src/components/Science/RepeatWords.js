import ScienceNav from './ScienceNav';

import styles from './RepeatWords.module.css';

const RepeatWords = () => {
  return (
    <div className="science">
      <ScienceNav />
      <section className="scienceContainer">
        <div className={styles.repeatWord}>
          <h2 className={styles.repeatAmount}>Powtórki: 45</h2>
          <div className={styles.repeatWordName}>
            <span className={styles.word}>siostra</span>
          </div>
          <textarea
            className={styles.repeatWordName}
            placeholder="tłumaczenie.."
          ></textarea>
        </div>
      </section>
    </div>
  );
};

export default RepeatWords;
