import styles from './LevelCard.module.css';
const WordLvl = (props) => {
  return (
    <div>
      <img src={props.img} alt="" loading="lazy" />
      <button className={styles.levelBtn}>{props.level}</button>
    </div>
  );
};

export default WordLvl;
