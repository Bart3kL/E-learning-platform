import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalWindow from '../../Layout/ModalWindow';
import { modalActions } from '../../../store/auth';
import styles from './AddWordForm.module.css';

const AddWordForm = ({word}) => {
  const dispatch = useDispatch();
  const modalWindow = useSelector((state) => state.modal.modalWindow);
  let formIsValid = false;

  const [enteredWord, setEnteredWord] = useState();
  const [wordTouched, setWordTouched] = useState(false);

  const enteredWordIsValid = enteredWord;
  const wordInputIsInvalid = !enteredWordIsValid && wordTouched;
  const wordInputChangeHandler = (e) => {
    setEnteredWord(e.target.value);
  };
  const wordInputBlurHandler = () => {
    setWordTouched(true);
  };
  //////////////////////////////////////////////////////////////
  const [enteredTranslation, setEnteredTranslation] = useState();
  const [translationTouched, setTranslationTouched] = useState(false);
  const enteredTranslationIsValid = enteredTranslation;
  const translationInputIsInvalid =
    !enteredTranslationIsValid && translationTouched;
  const translationInputChangeHandler = (e) => {
    setEnteredTranslation(e.target.value);
  };

  const translationInputBlurHandler = () => {
    setTranslationTouched(true);
  };
  if (enteredWordIsValid && enteredTranslationIsValid) {
    formIsValid = true;
  }
  const submitHandler = (e) => {
    e.preventDefault();
    word(enteredWord)
    fetch(
      'https://english-page-7aa3f-default-rtdb.europe-west1.firebasedatabase.app/addedWords.json',
      {
        method: 'POST',
        body: JSON.stringify({
          word: enteredWord,
          translation: enteredTranslation,
        }),
      }
    )
      .then((response) => {
        dispatch(modalActions.showModalWindow());
        dispatch(modalActions.modalWindowText('Słowo zostało dodane'));
        return response.json();
      })
      .catch((er) => {
        dispatch(modalActions.showModalWindow());
        dispatch(modalActions.modalWindowText(er.message));
      });
    setEnteredTranslation('');
    setEnteredWord('');
    setWordTouched(false);
    setTranslationTouched(false);
  };
  return (
    <section className={styles.addWord}>
      {modalWindow ? <ModalWindow /> : ''}
      <form className={styles.form} onSubmit={submitHandler}>
        <label
          htmlFor="word"
          className={`${styles.addWordInput} firstAnimation`}
        >
          <p className={styles.inputName}>Słowo</p>
          <input
            type="name"
            id="word"
            value={enteredWord}
            onChange={wordInputChangeHandler}
            onBlur={wordInputBlurHandler}
          />
          {wordInputIsInvalid && (
            <p className={styles.inputError}>Wypełnij to pole.</p>
          )}
        </label>
        <label
          htmlFor="translate"
          className={`${styles.addWordInput} firstAnimation`}
        >
          <p className={styles.inputName}>Tłumaczenie</p>
          <input
            type="name"
            id="translate"
            value={enteredTranslation}
            onChange={translationInputChangeHandler}
            onBlur={translationInputBlurHandler}
          />

          {translationInputIsInvalid && (
            <p className={styles.inputError}>Wypełnij to pole.</p>
          )}
        </label>

        <button className={styles.addWordFormBtn} disabled={!formIsValid}>
          Dodaj
        </button>
      </form>
    </section>
  );
};

export default AddWordForm;
