import { NavLink } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Card from '../components/Dictionary/Card';
const CategoryPage = (props) => {
  const loadedMovies = [];
  for (const key in props.level.categoryName) {
    loadedMovies.push({
      id: key,
      categoryName: props.level.categoryName[key].name,
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
          <ul className="cards">
            {loadedMovies.map((category) => (
              <li key={category.id}>
                <NavLink to={`./${category.id}`} className="cardLink">
                  <Card
                    name={category.categoryName}
                    image={category.categoryImage}
                    amount={category.subcategory}
                  />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
   
    </div>
  );
};

export default CategoryPage;
