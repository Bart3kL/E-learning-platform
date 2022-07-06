import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState, Fragment } from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
// ------------------------------------------------------------------
import DictionaryPage from './pages/Dictionary/DictionaryPage';
import CategoryPage from './pages/Dictionary/CategoryPage';
import SubcategoryPage from './pages/Dictionary/SubcategoryPage';
import WordsPage from './pages/Dictionary/WordsPage';
import AddWordPage from './pages/Dictionary/AddWord/AddWordPage';
// ------------------------------------------------------------------
import PhrasesPage from './pages/Phrases/PhrasesPage';
import ListPhrasesPage from './pages/Phrases/ListPhrasesPage';
import AddPhrasePage from './pages/Phrases/AddPhrase/AddPhrasePage';
// ------------------------------------------------------------------
import GrammarPage from './pages/Grammar/GrammarPage';
import GrammarCategoryPage from './pages/Grammar/GrammarCategoryPage';
import GrammarNotesPage from './pages/Grammar/GrammarNotesPage';
// ------------------------------------------------------------------
import SciencePage from './pages/Science/SciencePage';
import Lessons from './components/Science/Lessons';
import Exerc
// ------------------------------------------------------------------
import './App.css';

function App() {
  const dispatch = useDispatch();

  const [levels, setLevels] = useState([]);
  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://english-page-7aa3f-default-rtdb.europe-west1.firebasedatabase.app/levels.json`
      );

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          level: data[key].name,
          image: data[key].image,
          categoryName: data[key].categories,
        });

        setLevels(loadedMovies);
      }
    })();
  }, [dispatch]);

  const [phrases, setPhrases] = useState([]);
  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://english-page-7aa3f-default-rtdb.europe-west1.firebasedatabase.app/phrases.json`
      );
      const data = await response.json();

      const phrases = [];

      for (const key in data) {
        phrases.push({
          id: key,
          phrase: data[key].name,
          phrases: data[key].zwroty,
        });

        setPhrases(phrases);
      }
    })();
  }, [dispatch]);

  const [grammar, setGrammar] = useState([]);
  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://english-page-7aa3f-default-rtdb.europe-west1.firebasedatabase.app/grammar.json`
      );
      const data = await response.json();

      const grammar = [];

      for (const key in data) {
        grammar.push({
          id: key,
          name: data[key].name,
          image: data[key].image,
          times: data[key].rodzaje,
        });

        setGrammar(grammar);
      }
    })();
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Navigate replace to="edudor" />} />
        <Route path="edudor" element={<HomePage />} />
        <Route path="logowanie" element={<LoginPage />} />
        <Route path="nauka" element={<SciencePage />}/>
        <Route path="lekcje" element={<Lessons />} />
        <Route path="powtorki" />
        <Route path="cwiczenia" />
        <Route path="fiszki" />
        <Route path="notatki" />
        <Route path="nauka-ze-sluchu" />
        <Route path="dopasowywanie" />

        <Route path="slownik" element={<DictionaryPage level={levels} />} />
        <Route path="dodaj-slowo" element={<AddWordPage />} />
        {levels.map((level) => (
          <Fragment key={level.level}>
            <Route
              path={`slownik/${level.level}`}
              key={level.level}
              element={<CategoryPage level={level} />}
            />

            {Object.entries(level.categoryName).map(([key]) => (
              <Fragment key={key}>
                <Route
                  path={`/slownik/${level.level}/${key}`}
                  key={key}
                  element={
                    <SubcategoryPage
                      subcategory={level.categoryName[key].podkategorie}
                    />
                  }
                />
                {Object.entries(level.categoryName[key].podkategorie).map(
                  ([id]) => (
                    <Route
                      path={`/slownik/${level.level}/${key}/${id}`}
                      key={id}
                      element={
                        <WordsPage
                          words={level.categoryName[key].podkategorie[id].slowa}
                        />
                      }
                    />
                  )
                )}
              </Fragment>
            ))}
          </Fragment>
        ))}
        <Route path="gramatyka" element={<GrammarPage grammar={grammar} />} />
        {grammar.map((gram) => (
          <Fragment key={gram.id}>
            <Route
              path={`gramatyka/${gram.id}/`}
              key={gram.id}
              element={<GrammarCategoryPage el={gram.times} />}
            />
            <Fragment>
              {Object.entries(gram.times).map(([el]) => (
                // console.log(gram.times.el)
                <Route
                  path={`gramatyka/${gram.id}/${el}`}
                  key={el}
                  element={<GrammarNotesPage el={gram.times[el]} />}
                />
                // console.log(el)
              ))}
            </Fragment>
          </Fragment>
        ))}
        <Route path="zwroty" element={<PhrasesPage phrases={phrases} />} />
        <Route path="dodaj-zwrot" element={<AddPhrasePage />} />
        {phrases.map((phrase) => (
          <Route
            path={`/zwroty/${phrase.id}`}
            key={phrase.id}
            element={<ListPhrasesPage phrases={phrase.phrases} />}
          />
        ))}
        <Route path="kontakt" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
