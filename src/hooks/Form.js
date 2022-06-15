import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';
import { useNavigate } from 'react-router-dom';

import styles from './Form.module.css';

const Form = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const enteredEmail = useSelector((state) => state.enteredEmail);
  const enteredEmailTouched = useSelector((state) => state.enteredEmailTouched);

  const enteredPassword = useSelector((state) => state.enteredPassword);
  const enteredPasswordTouched = useSelector(
    (state) => state.enteredPasswordTouched
  );

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredPasswordIsValid = enteredPassword.length >= 8;
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const emailInputChangeHandler = (e) => {
    dispatch(authActions.enteredEmail(e.target.value));
  };
  const emailInputBlurHandler = (e) => {
    dispatch(authActions.enteredEmailTouchedTrue());
  };

  const passwordInputChangeHandler = (e) => {
    dispatch(authActions.enteredPassword(e.target.value));
  };
  const passwordInputBlurHandler = (e) => {
    dispatch(authActions.enteredPasswordTouchedTrue());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(authActions.enteredEmail(''));
    dispatch(authActions.enteredEmailTouchedFalse());

    dispatch(authActions.enteredPassword(''));
    dispatch(authActions.enteredPasswordTouchedFalse());

    if (type === 'login') {
      dispatch(authActions.logged());
    }
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
        if (type === 'register') {
          navigate('/logowanie');
        } else {
          navigate('/edudor');
        }
      } else {
        return res.json().then((data) => {
          console.log(data);
        });
      }
    });
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="email">
        <p className={styles.inputName}>Adres e-mail</p>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className={styles.inputError}>Please enter a valid email.</p>
        )}
      </label>

      <label htmlFor="password">
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
      <div className={styles.inputBtns}>
        {type === 'register' ? (
          <button className={styles.inputBtn} disabled={!formIsValid}>
            ZAREJESTRUJ SIĘ
          </button>
        ) : (
          <button className={styles.inputBtn} disabled={!formIsValid}>
            ZALOGUJ SIĘ
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
