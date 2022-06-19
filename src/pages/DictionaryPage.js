import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../components/Layout/Header';
import LevelCard from '../components/Dictionary/LevelCard';
import { dictionaryActions } from '../store/auth';
const DictionaryPage = ({ level }) => {
  const dispatch = useDispatch();
  const levelPageHandler = (props) => {
    dispatch(dictionaryActions.levelName(`${props.url}`));
  };
  return (
    <div className="pageContainer">
      <Header
        header="Wybierz poziom"
        text="Słownik podzielony jest na poziomy."
      />
      <div className="cardContainer">
        <ul className="cards">
          {level.map((level) => (
            <li key={level.level} className="card">
              <NavLink
                to={`/slownik/${level.level}`}
                onClick={() => levelPageHandler({ url: level.level })}
              >
                <LevelCard level={level.level} img={level.image} />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DictionaryPage;
