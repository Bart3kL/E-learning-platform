import { NavLink } from 'react-router-dom';

import Header from '../components/Layout/Header';
import CategoryCard from '../components/Dictionary/Card';
const SubcategoryPage = ({ subcategory }) => {
  const loadedMovies = [];
  for (const key in subcategory) {
    loadedMovies.push({
      id: key,
      subcategoryName: subcategory[key].name,
      words: subcategory[key].slowa,
    });
  }
  return (
    <div className="pageContainer">
      <Header
        header="Wybierz podkategorię"
        text="Słownik jest podzielony na podkategorie."
      />
      <div className="cardContainer">
        <ul className="cards">
          {console.log(loadedMovies)}{' '}
          {loadedMovies.map((subcategory) => (
            <li>
              <NavLink to={`./asd`} className="cardLink">
                <CategoryCard
                  name={subcategory.subcategoryName}
                  amount={subcategory.words}
                  type="subcategory"
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubcategoryPage;
