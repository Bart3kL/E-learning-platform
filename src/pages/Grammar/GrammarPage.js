import Header from '../../components/Layout/Header';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
const GrammarPage = ({ grammar }) => {
  return (
    <div className="pageContainer">
      <Header
        header="Wybierz zagadnienie"
        text="Spis zagadnień gramatycznych."
      />
      <section className="cardContainer">
        <ul className="cards">
          {grammar.map((gram) => (
            <li key={gram.id}>
              <Link to="/" className="cardLink">
                <Card name={gram.name} image={gram.image} amount={gram.times} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default GrammarPage;
