import { AiFillSound } from 'react-icons/ai';
import Spinner from '../Layout/Spinner';
import ScienceNav from './ScienceNav';
import styles from './HearingLesson.module.css';
import { useState, useEffect } from 'react';

const HearingLesson = () => {
  const [randomWordIndex, setRandomWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [words, setWords] = useState([]);
  const [word, setWord] = useState('');
  const [spinner, setSpinner] = useState(true);
  const [showWord, setShowWord] = useState(false);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://english-page-7aa3f-default-rtdb.europe-west1.firebasedatabase.app/words.json`
      );
      const data = await response.json();

      const wordsList = [];

      for (const key in data) {
        wordsList.push({
          word: data[key].word,
          example: data[key].example,
          sound: data[key].sound,
          translation: data[key].translation,
        });

        setWords(wordsList);
      }
      setSpinner(false);
    })();
  }, []);

  const soundHandler = () => {
    const audio = new Audio(words[randomWordIndex].sound);
    audio.play();
  };
  const wordHandler = (e) => {
    setWord(e.target.value);
  };
  const checkHandler = () => {
    setShowWord(true);
    if (words[randomWordIndex].word === word) {
      console.log(words[randomWordIndex].word, word);
    } else {
      console.log(words[randomWordIndex].word, word);
    }
  };
  const nextWordHandler = () => {
    setWord(' ');
    setShowWord(false);
    setRandomWordIndex(Math.floor(Math.random() * words.length));
  };
  const hintLetterHandler = (props) => {
    setWord(word + `${props[letterIndex]}`);
    console.log(letterIndex);
    setLetterIndex(letterIndex + 1);
    if (letterIndex === props.length - 1) {
      setShowWord(true);
      setLetterIndex(0);
    }
  };
  return (
    <div className="science">
      <ScienceNav />

      {spinner ? (
        <Spinner />
      ) : (
        <section className={styles.hearingLesson}>
          {showWord ? (
            <div className={styles.hearingCard}>
              <h1 className={styles.heading}>Słowo</h1>
              <div className={styles.hearingIcon}>
                <AiFillSound className={styles.icon} onClick={soundHandler} />
              </div>
              <div className={styles.hearingSentece}>
                {words[randomWordIndex].example}{' '}
                <span className={styles.correctWord}>
                  {words[randomWordIndex].word}.
                </span>
              </div>

              <div className={styles.hearingBtns}>
                <button className={styles.hearingBtn} onClick={nextWordHandler}>
                  Następne
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.hearingCard}>
              <h1 className={styles.heading}>Wpisz usłyszane słowo.</h1>
              <div className={styles.hearingIcon}>
                <AiFillSound className={styles.icon} onClick={soundHandler} />
              </div>
              <input
                type="text"
                className={styles.hearingWord}
                onChange={wordHandler}
                value={word}
              />
              <div className={styles.hearingBtns}>
                <button
                  className={styles.hearingBtn}
                  onClick={() => hintLetterHandler(words[randomWordIndex].word)}
                >
                  Podpowiedz literę
                </button>
                <button className={styles.hearingBtn} onClick={checkHandler}>
                  Sprawdź
                </button>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default HearingLesson;
