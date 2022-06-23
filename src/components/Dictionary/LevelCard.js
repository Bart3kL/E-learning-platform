import styles from './LevelCard.module.css';
const WordLvl = (props) => {
  return (
    <div className={styles.levelCard}>
      <img src={props.img} alt="" className={styles.categoryImage}/>
      <button className={styles.levelBtn}>{props.level}</button>
    </div>
  );
};

export default WordLvl;
