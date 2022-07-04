
import styles from './AddedWordCard.module.css'
const AddedWordCard = ({word}) => {
  console.log(word);
  return (
    <div className={styles.card}>
      <div className={styles.word}>{word.item}</div>
      <div className={styles.translation}>{word.translation}</div>
    </div>
  );
};

export default AddedWordCard;
