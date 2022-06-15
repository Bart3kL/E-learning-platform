import { IoMdDoneAll } from 'react-icons/io';
import styles from './SecondHeading.module.css';

const SecondHeading = () => {
  return (
    <section className={styles.secondHeading}>
      <div className={styles.headingDetails}>
        <div className={styles.headingDetail}>
          <IoMdDoneAll className={styles.headingIcon} />
          <span>Ponad 1000 słówek</span>
        </div>
        <div className={styles.headingDetail}>
          <IoMdDoneAll className={styles.headingIcon} />
          <span>Nauka za darmo</span>
        </div>
        <div className={styles.headingDetail}>
          <IoMdDoneAll className={styles.headingIcon} />
          <span>Powtórki</span>
        </div>
      </div>
    </section>
  );
};

export default SecondHeading;
