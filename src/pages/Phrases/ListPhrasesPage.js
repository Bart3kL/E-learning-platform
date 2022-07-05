import Header from '../../components/Layout/Header';
import PhraseCard from '../../components/Phrases/PhraseCard';
const ListPhrases = ({ phrases }) => {
  const phrasesList = [];
  for (const key in phrases) {
    phrasesList.push({
      phrase: phrases[key].phrase,
      translation: phrases[key].translation,
    });
  }
  return (
    <div className="pageContainer">
      <Header
        header="Lista zwrotów"
        text="Poniżej znajduje się wybrana lista zwrotów."
      />
      <div className="cardContainer">
        <ul className="cards">
          {phrasesList.map((phrase) => (
            <li key={phrase.phrase} className="wordCard phraseCard firstAnimation">
              <PhraseCard phrase={phrase} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListPhrases;