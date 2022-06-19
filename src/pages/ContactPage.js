import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { authActions } from '../store/auth';

import ContactHeader from '../components/Contact/ContactHeader';
import Form from '../hooks/Form';

import styles from './ContactPage.module.css';

const ContactPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  if (pathname !== 'kontakt') {
    dispatch(authActions.enteredEmail(''));
    dispatch(authActions.enteredEmailTouchedFalse());

    dispatch(authActions.enteredName(''));
    dispatch(authActions.enteredNameTouchedFalse());

    dispatch(authActions.enteredMessage(''));
    dispatch(authActions.enteredMessageTouchedFalse());
  }
  return (
    <div className="pageContainer">
      <ContactHeader />
      <div className={styles.formContainer}>
        <Form type="contact" />
      </div>
    </div>
  );
};

export default ContactPage;
