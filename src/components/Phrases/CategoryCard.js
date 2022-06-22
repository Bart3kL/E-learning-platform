import styles from './CategoryCard.module.css';

const CategoryCard = ({ phrase }) => {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.categoryName}>{phrase.phrase}</div>
      <div className={styles.phrasesAmount}>
        {Object.keys(phrase.phrases).length} zwroty/ów
      </div>
    </div>
  );
};

export default CategoryCard;
