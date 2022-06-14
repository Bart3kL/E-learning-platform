import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { authActions } from '../store/auth';
import Form from '../hooks/Form';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  if (pathname !== 'logowanie') {
    dispatch(authActions.enteredEmail(''));
    dispatch(authActions.enteredEmailTouchedFalse());

    dispatch(authActions.enteredPassword(''));
    dispatch(authActions.enteredPasswordTouchedFalse());
  }
  return (
    <section className="pageWrapper">
      <div className={styles.login}>
        <Form type="login" />
      </div>
    </section>
  );
};

export default LoginPage;
