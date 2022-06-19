import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';

import styles from './ContactHeader.module.css';

const ContactHeader = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.contactDetail}>
        <HiLocationMarker className={styles.contactIcon} />
        <p className={styles.contactName}>Lokalizacja</p>
        <p className={styles.contactText}>Polska</p>
      </div>
      <div className={styles.contactDetail}>
        <AiFillPhone className={styles.contactIcon} />
        <p className={styles.contactName}>Telefon</p>
        <p className={styles.contactText}>+48 510 448 489</p>
      </div>
      <div className={styles.contactDetail}>
        <MdEmail className={styles.contactIcon} />
        <p className={styles.contactName}>Email</p>
        <p className={styles.contactText}>blewandowski.2221@gmail.com</p>
      </div>
    </header>
  );
};

export default ContactHeader;
