import RectangleCard from '../../components/RectangleCard';
import Header from '../../components/Layout/Header';
import { Link } from 'react-router-dom';
const GrammarCategoryPage = ({ el }) => {
  const grammarCategory = [];
  for (const key in el) {
    grammarCategory.push({
      grammarCategory: el[key].name,
      grammarNotes: el[key].rodzaje,
      grammarCategoryName: key,
    });
  }
  return (
    <div className="pageContainer">
      <Header
        header="Wybierz kategorię"
        text="Zwroty są podzielone na kategorie."
      />
      <div className="cardContainer">
        <ul className="cards">
          {grammarCategory.map((grammarName) => (
            <li key={grammarName.grammarCategory} className="firstAnimation">
              <Link
                to={`./${grammarName.grammarCategoryName}`}
                className="rectangleCardLink"
              >
                <RectangleCard
                  grammar={grammarName.grammarCategory}
                  amount={grammarName.grammarNotes}
                  type="grammar"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GrammarCategoryPage;
