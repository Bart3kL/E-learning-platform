import styles from './CategoryCard.module.css'

const CategoryCard = (props) => {
  return <>
  <div className={styles.categoryName}>{props.categoryName}</div>
  <img src={props.image} alt="" className={styles.categoryCardImage}/>
  <p className={styles.subcategoryCard}>{Object.keys(props.subcategory).length} podkateogorie</p>
  </>;
};

export default CategoryCard;
