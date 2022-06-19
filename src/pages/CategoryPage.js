import Header from '../components/Layout/Header';
// import { NavLink } from 'react-router-dom';
// import CategoryCard from '../components/Dictionary/CategoryCard';
const CategoryPage = (props) => {
  return (
    <div className="pageContainer">
      <Header
        header="Wybierz kategorię"
        text="Słownik jest podzielony na kategorię."
      />
      <div className="cardContainer">
        <ul className="cards">
          {props.level.map(level => console.log(level.categoryName))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryPage;

