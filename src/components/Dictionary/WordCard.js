import { AiFillSound, AiFillPlusCircle } from 'react-icons/ai';
import { useState } from 'react';
import styles from './WordCard.module.css';
const WordCard = ({ word}) => {
  const audio = new Audio(word.sound);

  const [showExample, setShowExample] = useState(false);

  const toggleExampleHandler = () => {
    setShowExample((showExample) => !showExample);
  };

  const playSoundHandler = () => {
    audio.play();
  };

  return (
    <>
      {showExample ? (
        <div className={styles.card}>
          <div className={styles.example + ' ' + styles.exampleFirst}>
            {word.example1}
          </div>
          <div className={styles.example}>{word.example2}</div>
          <button
            className={styles.exampleBtn + ' ' + styles.wordBtn}
            onClick={toggleExampleHandler}
          >
            Słowo
          </button>
        </div>
      ) : (
        <div className={styles.card}>
          <div className={styles.actions}>
            <div
              className={
                styles.actionsContainer + ' ' + styles.actionsContainerSound
              }
            >
              <AiFillSound onClick={playSoundHandler} />
            </div>
            <div
              className={
                styles.actionsContainer + ' ' + styles.actionsContainerWord
              }
            >
              <AiFillPlusCircle />
            </div>
          </div>
          <div className={styles.word}>{word.word}</div>
          <div className={styles.translation}>{word.translation}</div>

          <button className={styles.exampleBtn} onClick={toggleExampleHandler}>
            Zdania
          </button>
        </div>
      )}
    </>
  );
};

export default WordCard;
