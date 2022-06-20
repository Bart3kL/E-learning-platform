import styles from './Card.module.css';

const Card = (props) => {
  return (
    <>
      <div className={styles.cardContainer}>{props.name}</div>
      <img src={props.image} alt="" className={styles.cardImage} />
      <p className={styles.card}>
        {Object.keys(props.amount).length} {props.type ==='subcategory' ? 'słowo': 'podkategorie'}
      </p>
    </>
  );
};

export default Card;
