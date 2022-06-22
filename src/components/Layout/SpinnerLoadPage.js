import styles from './SpinnerLoadPage.module.css';
import { createPortal } from 'react-dom';
import Backdrop from './Backdrop';
const SpinnerPage = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};

const SpinnerLoadPage = () => {
  return (
    <>
      {createPortal(<Backdrop />, document.getElementById('backdrop'))}
      {createPortal(<SpinnerPage />, document.getElementById('overlay'))}
    </>
  );
};
export default SpinnerLoadPage;
