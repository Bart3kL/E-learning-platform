import styles from './Science.module.css';

const Science = () => {
  return (
    <section className={styles.scienceContainer}>
      <div className={styles.scienceHeader + ' ' + styles.block}>
        <h2 className={styles.scienceHeading}>
          Witaj ponownie, <p className={styles.newLine}>Bartek</p>
        </h2>
        <p className={styles.scienceRepeats}>Wczoraj wykonałeś 42 powtórki.</p>
      </div>
      <div className={styles.nextLesson + ' ' + styles.block}>
        <h2 className={styles.scienceLessonInfo}>Następna lekcja</h2>
        <div className={styles.scienceNextLessons}>
          <div className={styles.scienceLesson}>1</div>
          <div className={styles.scienceLesson}>2</div>
          <div className={styles.scienceLesson}>3</div>
        </div>
      </div>
      <div className={styles.nextStats + ' ' + styles.block}>
        <h2 className={styles.scienceStatsInfo}>Twoje statystyki</h2>
        <div className={styles.scienceStats}>
          <div className={styles.scienceStat}>
            <div className={styles.scienceStatName}>Przerobione lekcje</div>
            <div className={styles.scienceStatDetail}>3</div>
          </div>
          <div className={styles.scienceStat}>
            <div className={styles.scienceStatName}>Dodane słowa</div>
            <div className={styles.scienceStatDetail}>23</div>
          </div>
          <div className={styles.scienceStat}>
            <div className={styles.scienceStatName}>Wykonane ćwiczenia</div>
            <div className={styles.scienceStatDetail}>21</div>
          </div>
          <div className={styles.scienceStat}>
            <div className={styles.scienceStatName}>Data rejestracji</div>
            <div className={styles.scienceStatDetail}>2019/03/21</div>
          </div>
          <div className={styles.scienceStat}>
            <div className={styles.scienceStatName}>Spędzony czas</div>
            <div className={styles.scienceStatDetail}>3h 43min 30s</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;
