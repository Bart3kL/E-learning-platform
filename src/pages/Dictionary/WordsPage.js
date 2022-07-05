import Header from '../../components/Layout/Header';
import WordCard from '../../components/Dictionary/WordCard';

const WordsPage = ({ words }) => {
  const loadedMovies = [];
  for (const key in words) {
    loadedMovies.push({
      word: key,
      translation: words[key].translation,
      example1: words[key].example1,
      example2: words[key].example2,
      sound: words[key].sound,
    });
  }
  return (
    <div className="pageContainer">
      <Header
        header="Lista słów"
        text="Poniżej znajduje się wybrana lista słów."
      />
      <div className="pageContainer">
        <ul className="cards">
          {loadedMovies.map((word) => (
            <li key={word.word} className='wordCard firstAnimation'>
              <WordCard word={word} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WordsPage;
