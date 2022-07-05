import styles from './RectangleCard.module.css';

const RectangleCard = ({ phrase, type, grammar, amount }) => {
  const amountt = type === 'grammar' ? amount : phrase.phrases;
  return (
    <div className={styles.categoryCard}>
      <div className={styles.categoryName}>
        {type === 'grammar' ? grammar : phrase.phrase}
      </div>
      <div className={styles.phrasesAmount}>
        {Object.keys(amountt).length} {type === 'grammar' ? 'rodzaj/e' : `zwroty/ów `}
      </div>
    </div>
  );
};

export default RectangleCard;
