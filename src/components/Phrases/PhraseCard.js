import { AiFillPlusCircle } from 'react-icons/ai';

import styles from './PhraseCard.module.css';
const PhraseCard = ({ phrase }) => {
  return (
    <div className={styles.phraseCard}>
      <div className={styles.actions}>
        <div className={styles.actionsContainer}>
          <AiFillPlusCircle />
        </div>
      </div>
      <div className={styles.phrase}>{phrase.phrase}</div>
      <div className={styles.phrase + ' ' + styles.phraseTranslation}>{phrase.translation}</div>
    </div>
  );
};

export default PhraseCard;
