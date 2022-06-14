import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { authActions } from '../../store/auth';
import Form from '../../hooks/Form';

import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  if (pathname !== 'edudor') {
    dispatch(authActions.enteredEmail(''));
    dispatch(authActions.enteredEmailTouchedFalse());

    dispatch(authActions.enteredPassword(''));
    dispatch(authActions.enteredPasswordTouchedFalse());
  }
  return (
    <section className={styles.registerForm}>
      <Form type="register" />
    </section>
  );
};

export default RegisterForm;
