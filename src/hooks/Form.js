import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authActions, modalActions, spinnerActions } from '../store/auth';

import ModalWindow from '../components/Layout/ModalWindow';
import Spinner from '../components/Layout/Spinner';

import styles from './Form.module.css';

const Form = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const enteredEmail = useSelector((state) => state.auth.enteredEmail);
  const enteredEmailTouched = useSelector(
    (state) => state.auth.enteredEmailTouched
  );
  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const emailInputChangeHandler = (e) => {
    dispatch(authActions.enteredEmail(e.target.value));
  };
  const emailInputBlurHandler = (e) => {
    dispatch(authActions.enteredEmailTouchedTrue());
  };

  const enteredPassword = useSelector((state) => state.auth.enteredPassword);
  const enteredPasswordTouched = useSelector(
    (state) => state.auth.enteredPasswordTouched
  );
  const enteredPasswordIsValid = enteredPassword.length >= 8;
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enteredPasswordTouched;
  const passwordInputChangeHandler = (e) => {
    dispatch(authActions.enteredPassword(e.target.value));
  };
  const passwordInputBlurHandler = (e) => {
    dispatch(authActions.enteredPasswordTouchedTrue());
  };

  const enteredName = useSelector((state) => state.auth.enteredName);
  const enteredNameTouched = useSelector(
    (state) => state.auth.enteredNameTouched
  );
  const enteredNameIsValid = enteredName.length >= 3;
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputChangeHandler = (e) => {
    dispatch(authActions.enteredName(e.target.value));
  };
  const nameInputBlurHandler = (e) => {
    dispatch(authActions.enteredNameTouchedTrue());
  };

  const enteredMessage = useSelector((state) => state.auth.enteredMessage);
  const enteredMessageTouched = useSelector(
    (state) => state.auth.enteredMessageTouched
  );
  const enteredMessageIsValid = enteredMessage.length >= 10;
  const messageInputIsInvalid = !enteredMessageIsValid && enteredMessageTouched;
  const messageInputChangeHandler = (e) => {
    dispatch(authActions.enteredMessage(e.target.value));
  };
  const messageInputBlurHandler = (e) => {
    dispatch(authActions.enteredMessageTouchedTrue());
  };

  const modalWindow = useSelector((state) => state.modal.modalWindow);

  const spinner = useSelector((state) => state.spinner.activation);

  let formIsValid = false;
  let submitFormContact = '';

  if (type === 'contact') {
    if (enteredEmailIsValid && enteredNameIsValid && enteredMessageIsValid) {
      formIsValid = true;
    }

    submitFormContact = 'https://formsubmit.co/blewandowski.2221@gmail.com';
  }
  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const resetValueInputs = () => {
    dispatch(authActions.enteredEmail(''));
    dispatch(authActions.enteredEmailTouchedFalse());

    dispatch(authActions.enteredPassword(''));
    dispatch(authActions.enteredPasswordTouchedFalse());

    dispatch(authActions.enteredName(''));
    dispatch(authActions.enteredNameTouchedFalse());

    dispatch(authActions.enteredMessage(''));
    dispatch(authActions.enteredMessageTouchedFalse());
  };

  const submitHandler = (e) => {
    if (type !== 'contact') {
      e.preventDefault();

      resetValueInputs();

      dispatch(spinnerActions.activeSpinner());
      fetch(
        `${
          type === 'register'
            ? 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAaV3REfzAWxr800izdSZGq5XppXStemlE'
            : 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAaV3REfzAWxr800izdSZGq5XppXStemlE'
        }`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => {
        if (res.ok) {
          dispatch(spinnerActions.deactivateSpinner());
          if (type === 'register') {
            dispatch(modalActions.showModalWindow());
            dispatch(
              modalActions.modalWindowText(
                'Konto założone! Możesz się teraz zalogować.'
              )
            );
            navigate('/logowanie');
          } else {
            dispatch(authActions.logged());
            navigate('/edudor');
          }
        } else {
          return res.json().then((data) => {
            dispatch(spinnerActions.deactivateSpinner());
            dispatch(modalActions.showModalWindow());
            dispatch(modalActions.modalWindowText(data.error.message));
          });
        }
      });
    } else {
      e.preventDefault();

      dispatch(modalActions.showModalWindow());
      dispatch(modalActions.modalWindowText('Wiadomość wysłana!.'));

      resetValueInputs();
    }
  };
  return (
    <>
      {modalWindow ? <ModalWindow /> : ''}
      {spinner ? (
        <Spinner />
      ) : (
        <form
          className={styles.form}
          onSubmit={submitHandler}
          action={submitFormContact}
          method="POST"
        >
          {type === 'contact' && (
            <label htmlFor="name" className="firstAnimation">
              <p className={styles.inputName}>Name</p>
              <input
                type="name"
                id="name"
                name="name"
                value={enteredName}
                onChange={nameInputChangeHandler}
                onBlur={nameInputBlurHandler}
              />
              {nameInputIsInvalid && (
                <p className={styles.inputError}>
                  Name must be at least 3 characters.
                </p>
              )}
            </label>
          )}
          <label htmlFor="email" className="firstAnimation">
            <p className={styles.inputName}>Adres e-mail</p>
            <input
              type="email"
              id="email"
              name="email"
              value={enteredEmail}
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
            />
            {emailInputIsInvalid && (
              <p className={styles.inputError}>Please enter a valid email.</p>
            )}
          </label>
          {type !== 'contact' && (
            <label htmlFor="password" className="secondAnimation">
              <p className={styles.inputName}>Password</p>
              <input
                type="password"
                id="password"
                value={enteredPassword}
                onChange={passwordInputChangeHandler}
                onBlur={passwordInputBlurHandler}
              />
              {passwordInputIsInvalid && (
                <p className={styles.inputError}>
                  Password must be at least 8 characters.
                </p>
              )}
            </label>
          )}

          {type === 'contact' && (
            <label htmlFor="message" className="secondAnimation">
              <p className={styles.inputName}>Wiadomość</p>
              <textarea
                className={styles.textareaContact}
                type="text"
                id="message"
                name="message"
                value={enteredMessage}
                onChange={messageInputChangeHandler}
                onBlur={messageInputBlurHandler}
              />
              {messageInputIsInvalid && (
                <p className={styles.inputError}>
                  Message must be at least 10 characters.
                </p>
              )}
            </label>
          )}
          <div className={`${styles.inputBtns} secondAnimation`}>
            {type === 'register' && (
              <button className={styles.inputBtn} disabled={!formIsValid}>
                ZAREJESTRUJ SIĘ
              </button>
            )}
            {type === 'login' && (
              <button className={styles.inputBtn} disabled={!formIsValid}>
                ZALOGUJ SIĘ
              </button>
            )}
            {type === 'contact' && (
              <button className={styles.inputBtn} disabled={!formIsValid}>
                Wyślij
              </button>
            )}
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
