import Header from '../components/Layout/Header';
import CategoryCard from '../components/Dictionary/CategoryCard';
import styles from './CategoryPage.module.css';
const CategoryPage = (props) => {
  const loadedMovies = [];
  for (const key in props.level.categoryName) {
    loadedMovies.push({
      id: key,
      categoryName: props.level.categoryName[key].name,
      categoryImage: props.level.categoryName[key].image,
      subcategory: props.level.categoryName[key].podkategorie,
    });
  }
  return (
    <div className="pageContainer">
      <Header
        header="Wybierz kategorię"
        text="Słownik jest podzielony na kategorię."
      />
      <div className="cardContainer">
        <ul className={styles.categoryCards}>
          {loadedMovies.map((category) => (
            <li className={styles.categoryCard} key={category.id}>
              <CategoryCard
                categoryName={category.categoryName}
                image={category.categoryImage}
                subcategory={category.subcategory}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryPage;
