import styles from './Heading.module.css';

const Heading = () => {
  const firstWord = 'Wszystko';
  const secondWord = 'czego';
  const thirdWord = 'potrzebujesz';
  const fourthWord = 'jest';
  const fifthWord = 'teraz';
  const sixthWord = 'jednym';
  const seventhWord = 'miejscu';

  return (
    <section className={styles.headingText}>
      <h1 className={styles.headingWrapper}>
        <div className={styles.headingFirstWord}>
          {firstWord.split('').map((letter) => (
            <span className="textAnimation">{letter}</span>
          ))}
        </div>
        <div>
          {secondWord.split('').map((letter) => (
            <span className="textAnimation">{letter}</span>
          ))}
          <p className={styles.space}> </p>
          {thirdWord.split('').map((letter) => (
            <span className="textAnimation">{letter}</span>
          ))}
          <br />
          <p className={styles.space}> </p>
          {fourthWord.split('').map((letter) => (
            <span className="textAnimation">{letter}</span>
          ))}
          <p className={styles.space}> </p>
          {fifthWord.split('').map((letter) => (
            <span className="textAnimation">{letter}</span>
          ))}
          <p className={styles.space}> </p>
          <span className="textAnimation">w</span>
          <p className={styles.space}> </p>
          {sixthWord.split('').map((letter) => (
            <span className="textAnimation">{letter}</span>
          ))}
          <br />
          <p className={styles.space}> </p>
          {seventhWord.split('').map((letter) => (
            <span className="textAnimation">{letter}</span>
          ))}
        </div>
      </h1>
    </section>
  );
};

export default Heading;
