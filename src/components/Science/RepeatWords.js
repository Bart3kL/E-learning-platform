import ScienceNav from './ScienceNav';
import styles from './RepeatWords.module.css';
import { useState, useEffect } from 'react';
import Spinner from '../Layout/Spinner';

let letterIndex = 0;
const RepeatWords = () => {
  const [spinner, setSpinner] = useState(true);

  const [checkAnswer, setCheckAnswer] = useState(false);
  const [word, setWord] = useState('');
  const [congratulations, setCongratulations] = useState();

  const [words, setWords] = useState([]);

  (function () {
    words.map((el) =>
      fetch(
        `https://english-page-7aa3f-default-rtdb.europe-west1.firebasedatabase.app/addedWords/${el.key}.json`,
        {
          method: 'PATCH',
          body: JSON.stringify({
            knowledge: el.knowledge > 0 ? el.knowledge - 1 : 0,
          }),
        }
      )
        .then((response) => {
          return response.json();
        })
        .catch((er) => {
          console.log(er);
        })
    );
  })();
  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://english-page-7aa3f-default-rtdb.europe-west1.firebasedatabase.app/addedWords.json`
      );

      const data = await response.json();

      const loadedWords = [];

      for (const key in data) {
        loadedWords.push({
          key: key,
          item: data[key].item,
          translation: data[key].translation,
          knowledge: data[key].knowledge,
        });
        setWords(loadedWords);
      }
      setSpinner(false);
    })();
  }, []);
  const repeats = [];
  let currentRepeatIndex = Math.floor(Math.random() * repeats.length);
  const smartRepeats = words.map((el) =>
    el.knowledge <= 0 ? repeats.push(el) : ''
  );

  const checkAnswerHandler = () => {
    if (word === repeats[currentRepeatIndex].item) {
      setCongratulations('Świetnie ci poszło! ');
    }
    if (word !== repeats[currentRepeatIndex].item) {
      setCongratulations('Spróbuj ponownie! ');
    }
    setCheckAnswer(true);
  };
  const translationWordHandler = (e) => {
    setWord(e.target.value);
  };

  const showOneLetterHandler = (props) => {
    setWord(word + `${props[letterIndex]}`);

    letterIndex++;
    if (letterIndex === props.length + 1) {
      letterIndex = 0;
      setCheckAnswer(true);
      setCongratulations('Spróbuj bez podpowidzi! ');
    }
  };

  const goodButtonHandler = () => {
    words.map((el) => (el.item === word ? el.knowledge++ : console.log('no')));
    setCheckAnswer(false);
    setWord('');
  };

  return (
    <>
      <div className="science">
        <ScienceNav />
        <section className="scienceContainer">
          <div className={styles.repeatWord}>
            <h2 className={styles.repeatAmount}>Powtórki: {repeats.length}</h2>
            <div className={styles.repeatWordName}>
              <span className={styles.word}>
                {!spinner ? (
                  repeats.length > 0 ? (
                    repeats[currentRepeatIndex].translation
                  ) : (
                    ''
                  )
                ) : (
                  <Spinner />
                )}
              </span>
            </div>

            {checkAnswer ? (
              <div
                className={styles.repeatWordName}
                placeholder="tłumaczenie..."
              >
                <p className={styles.congratulations}>{congratulations}</p>
                {!spinner ? (
                  repeats.length > 0 ? (
                    repeats[currentRepeatIndex].item
                  ) : (
                    ''
                  )
                ) : (
                  <Spinner />
                )}
              </div>
            ) : (
              <textarea
                className={styles.repeatWordName}
                placeholder="tłumaczenie..."
                onChange={translationWordHandler}
                value={word}
              ></textarea>
            )}
            {checkAnswer ? (
              <div className={styles.check}>
                <button
                  className={styles.qualityBtn3 + ' ' + styles.qualityBtn}
                  onClick={goodButtonHandler}
                >
                  Następne
                </button>
              </div>
            ) : (
              <div className={styles.check}>
                <button
                  className={styles.checkBtn}
                  onClick={() =>
                    showOneLetterHandler(repeats[currentRepeatIndex].item)
                  }
                >
                  Podpowiedz literę
                </button>
                <p className={styles.fastClick}>klawisz space</p>
                <button
                  className={styles.checkBtn}
                  onClick={checkAnswerHandler}
                >
                  Sprawdź odpowiedź
                </button>
                <p className={styles.fastClick}>klawisz enter</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default RepeatWords;
