import Header from '../../components/Layout/Header';
import GrammarNote from '../../components/Grammar/GrammarNote';
const GrammarNotesPage = ({ el }) => {
  return (
    <div className="pageContainer">
      <Header header={el.name} text={`${el.name} - notatki`} />

      <GrammarNote note={el.rodzaje} />
    </div>
  );
};

export default GrammarNotesPage;
