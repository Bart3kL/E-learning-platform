import { useDispatch, useSelector } from 'react-redux/es/exports';
import { modalActions } from '../../store/auth';
import { createPortal } from 'react-dom';

import styles from './ModalWindow.module.css';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const Modal = () => {
  const dispatch = useDispatch();
  const modalWindowText = useSelector((state) => state.modal.modalWindowText);

  const closeModalWindowHandler = () => {
    dispatch(modalActions.hideModalWindow());
  };

  return (
    <section className={styles.modalWindow}>
      <h2 className={styles.modalWindowName}>Komunikat</h2>
      <p className={styles.modalWindowText}>{modalWindowText}</p>
      <div className={styles.modalWindowBtnWrapper}>
        <button
          className={styles.modalWindowBtn}
          onClick={closeModalWindowHandler}
        >
          Zamknij
        </button>
      </div>
    </section>
  );
};
const ModalWindow = (props) => {
  const dispatch = useDispatch();

  const closeModalWindowHandler = () => {
    dispatch(modalActions.hideModalWindow());
  };
  return (
    <>
      {createPortal(
        <Backdrop onClick={closeModalWindowHandler} />,
        document.getElementById('backdrop')
      )}
      {createPortal(<Modal />, document.getElementById('overlay'))}
    </>
  );
};
export default ModalWindow;
